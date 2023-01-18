#include "Secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include <OneWire.h>
#include <DallasTemperature.h>
#include <TinyGPSPlus.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <AsyncElegantOTA.h>

AsyncWebServer server(80);

// Create the lcd object address 0x3F and 16 columns x 2 rows
LiquidCrystal_I2C lcd(0x27, 16, 2); //

// The TinyGPSPlus object
// TinyGPSPlus gps;

// Temperature sensor
const int Temperature_sensor_pin = 4;           // GPIO where the DS18B20 is connected to
OneWire oneWire(Temperature_sensor_pin);        // Setup a oneWire instance to communicate with any OneWire devices
DallasTemperature Temperature_sensor(&oneWire); // Pass our oneWire reference to Dallas Temperature sensor

// LDR sensor
const int LDR_pin = A6; // LDR is connected to GPIO 02

// pH sensor
const int pH_Pin = A0;

#define AWS_IOT_PUBLISH_TOPIC "/device1/"
#define AWS_IOT_SUBSCRIBE_TOPIC "/device1/"

#define ARRAY_SIZE 6

float pH[ARRAY_SIZE];
int LDR_val[ARRAY_SIZE];
float temperatureC[ARRAY_SIZE];

double latitude = 0.000000;
double longitude = 0.000000;

const int buttonPinForUpload = 26;
int buttonStateForUpload = 0;
int lastButtonStateForUpload = 0;

const int buttonPinForGps = 25;
int buttonStateForGps = 0;
int lastButtonStateForGps = 0;

bool gps_bool_val = true;
int count = 0;

WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(200, "text/plain", "Hi! I am corals protector device-1."); });

  AsyncElegantOTA.begin(&server); // Start ElegantOTA
  server.begin();
  // WiFi.mode(WIFI_STA);
  // WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  // Serial.println("Waiting for Wi-Fi");
  // lcd.clear();
  // lcd.setCursor(2, 0);
  // lcd.print("Waiting for");
  // lcd.setCursor(0, 1);
  // lcd.print("Wi-Fi ");
  // delay(1000);

  // int dot_count = 6;
  // while (WiFi.status() != WL_CONNECTED)
  // {
  //   delay(500);
  //   Serial.print(".");

  //   lcd.setCursor(dot_count, 1);
  //   lcd.print(".");
  //   dot_count++;
  //   if (dot_count == 15)
  //   {
  //     dot_count = 6;
  //   }
  // }

  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);

  // Create a message handler
  client.setCallback(messageHandler);

  Serial.println();
  Serial.println("Connecting to AWS IOT");

  lcd.clear();
  lcd.setCursor(2, 0);
  lcd.print("Connected to");
  lcd.setCursor(0, 1);
  lcd.print("... Network ...");
  delay(1000);

  int dot_count = 0;
  lcd.clear();
  while (!client.connect(THINGNAME))
  {
    delay(5000);
    Serial.print(".");

    lcd.setCursor(2, 0);
    lcd.print("Turn on Data");
    lcd.setCursor(dot_count, 1);
    lcd.print(".");
    dot_count++;
    if (dot_count == 15)
    {
      dot_count = 0;
    }
  }

  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    lcd.clear();
    lcd.setCursor(4, 0);
    lcd.print("NETWORK");
    lcd.setCursor(4, 1);
    lcd.print("Timeout!");
    return;
  }

  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);

  Serial.println("AWS IoT Connected!");

  lcd.clear();
  lcd.setCursor(4, 0);
  lcd.print("DATABASE");
  lcd.setCursor(3, 1);
  lcd.print("Connected!");
  delay(500);
}

void publishMessage()
{
  // StaticJsonDocument<200> doc;
  // doc["sensor"] = "temperature";
  // doc["value"] = 25;
  // char json[200];
  // serializeJson(doc, json);
  // client.publish(AWS_IOT_PUBLISH_TOPIC, json);

  // for mac address //
  //    byte mac[6];
  //    char mac_Id[18];
  //    WiFi.macAddress(mac);
  //    snprintf(mac_Id, sizeof(mac_Id), "%02x:%02x:%02x:%02x:%02x:%02x",
  //             mac[0], mac[1], mac[2], mac[3], mac[4], mac[5]);
  //    Serial.println(mac_Id);

  //    char LDR[100];
  //    snprintf(LDR, sizeof(LDR_val), "[%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d]",
  //             LDR_val[0], LDR_val[1], LDR_val[2], LDR_val[3], LDR_val[4], LDR_val[5],
  //             LDR_val[6], LDR_val[7], LDR_val[8], LDR_val[9], LDR_val[10], LDR_val[11],
  //             LDR_val[12], LDR_val[13], LDR_val[14], LDR_val[15], LDR_val[16], LDR_val[17],
  //             LDR_val[18], LDR_val[19], LDR_val[20], LDR_val[21], LDR_val[22], LDR_val[23]);
  //    Serial.println(LDR);
  //    char pH[100];
  //    snprintf(pH, sizeof(LDR_val), "[%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d]",
  //             LDR_val[0], LDR_val[1], LDR_val[2], LDR_val[3], LDR_val[4], LDR_val[5],
  //             LDR_val[6], LDR_val[7], LDR_val[8], LDR_val[9], LDR_val[10], LDR_val[11],
  //             LDR_val[12], LDR_val[13], LDR_val[14], LDR_val[15], LDR_val[16], LDR_val[17],
  //             LDR_val[18], LDR_val[19], LDR_val[20], LDR_val[21], LDR_val[22], LDR_val[23]);
  //    Serial.println(pH);
  //    char temp[100];
  //    snprintf(temp, sizeof(LDR_val), "[%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d]",
  //             LDR_val[0], LDR_val[1], LDR_val[2], LDR_val[3], LDR_val[4], LDR_val[5],
  //             LDR_val[6], LDR_val[7], LDR_val[8], LDR_val[9], LDR_val[10], LDR_val[11],
  //             LDR_val[12], LDR_val[13], LDR_val[14], LDR_val[15], LDR_val[16], LDR_val[17],
  //             LDR_val[18], LDR_val[19], LDR_val[20], LDR_val[21], LDR_val[22], LDR_val[23]);
  //    Serial.println(temp);

  // for printing Location below 2 line in same location
  char Location[50] = "";
  snprintf(Location, 50, "%lf,%lf", latitude, longitude);

  ////////////////////////////////
  // StaticJsonDocument<2048> doc;
  DynamicJsonDocument doc(4096);

  doc["deviceCode"] = "device1";
  doc["locations"] = Location;

  JsonArray array_for_ldr = doc.createNestedArray("LDR");
  for (int i = 0; i < 6; i++)
  {
    array_for_ldr.add(LDR_val[i]);
  }

  JsonArray array_for_ph = doc.createNestedArray("pH");
  for (int i = 0; i < 6; i++)
  {
    array_for_ph.add(pH[i]);
  }

  JsonArray array_for_temperature = doc.createNestedArray("Temperature");
  for (int i = 0; i < 6; i++)
  {
    array_for_temperature.add(temperatureC[i]);
  }

  ////////////////////////////////////////////////////
  size_t jsonSize = measureJson(doc);
  // Serial.println("............................................................................");
  // Serial.println(jsonSize);
  // Serial.println("............................................................................");
  char jsonBuffer[2048];
  serializeJson(doc, jsonBuffer); // print to client

  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
  client.loop();
}

void messageHandler(char *topic, byte *payload, unsigned int length)
{
  //    Serial.print("incoming: ");
  //    Serial.println(topic);
  //
  //    StaticJsonDocument<200> doc;
  //    deserializeJson(doc, payload);
  //    const char *message = doc["message"];
  //    Serial.println(message);
}

// bool getGps()
// {
//   while (Serial2.available() > 0)
//   {
//     if (gps.encode(Serial2.read()))
//     {
//       if (gps.location.isValid())
//       {
//         latitude = (gps.location.lat());
//         longitude = (gps.location.lng());

//         if ((int)latitude == 0 || (int)longitude == 0)
//         {
//           continue;
//         }

//         return false; // for break gps find function
//       }

//       else
//       {
//         Serial.println(F("Location: INVALID"));
//         lcd.clear();
//         lcd.setCursor(3, 0);
//         lcd.print("Location: ");
//         lcd.setCursor(4, 1);
//         lcd.print("INVALID");
//       }
//     }
//   }
//   // return false;
// }

void setup()
{
  // for 16x2 lcd screen
  lcd.init();      // Initialize the LCD connected
  lcd.backlight(); // Turn on the backlight on LCD.
  // Here cursor is placed on first position (col: 3) of the second line (row: 0)
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("*** WELCOME ***");
  delay(3000);

  Serial.begin(115200);

  // for Gps
  Serial2.begin(9600);

  Temperature_sensor.begin(); // Start the Temperature sensor

  pinMode(LDR_pin, INPUT);            // for LDR
  pinMode(pH_Pin, INPUT);             // for pH
  pinMode(buttonPinForUpload, INPUT); // for upload
  pinMode(buttonPinForGps, INPUT);    // for gps skip

  // calculating Gps
  // while (gps_bool_val)
  // {
  //   if (millis() > 5000 && gps.charsProcessed() < 10)
  //   {
  //     Serial.println(F("No GPS detected: check wiring."));

  //     lcd.clear();
  //     lcd.setCursor(0, 0);
  //     lcd.print("No GPS detected:");
  //     lcd.setCursor(2, 1);
  //     lcd.print("checking ...");

  //     delay(1000);
  //   }

  //   gps_bool_val = getGps();

  //   buttonStateForGps = digitalRead(buttonPinForGps);
  //   if (buttonStateForGps != lastButtonStateForGps)
  //   {
  //     if (buttonStateForGps == LOW)
  //     {
  //       delay(5000); // add debounce delay
  //       Serial.println("meassage before gps skip button pressed................................................");
  //       Serial.println("meassage after gps skip button pressed.................................................");
  //       break;
  //     }
  //     lastButtonStateForGps = buttonStateForGps;
  //   }
  // }

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("No GPS detected:");
  lcd.setCursor(2, 1);
  lcd.print("checking ...");

  // while (true)
  // {
  //   buttonStateForGps = digitalRead(buttonPinForGps);
  //   if (buttonStateForGps != lastButtonStateForGps)
  //   {
  //     if (buttonStateForGps == LOW)
  //     {
  //       delay(3000); // add debounce delay

  //       // Serial.println("gps skip button pressed ................................................");

  //       break;
  //     }
  //     lastButtonStateForGps = buttonStateForGps;
  //   }
  // }

  delay(10000);

  Serial.println(F("GPS calculated"));

  lcd.clear();
  lcd.setCursor(5, 0);
  lcd.print("*GPS*");
  lcd.setCursor(3, 1);
  lcd.print("calculated");

  // // // for printing Location below 2 line in same location
  // char Location[50] = "";
  // snprintf(Location, 50, "Lat: %lf; Lng: %lf", latitude, longitude);
  // Serial.print("Location : ");
  // Serial.print(Location);

  // lcd.clear();
  // lcd.setCursor(0, 0);
  // lcd.print("Lat: ");
  // lcd.setCursor(5, 0);
  // lcd.print(latitude);
  // lcd.setCursor(0, 1);
  // lcd.print("Lng:");
  // lcd.setCursor(5, 1);
  // lcd.print(longitude);

  delay(500);

  Serial.println("Started Measuring");

  delay(3000);

  lcd.clear();
  lcd.setCursor(4, 0);
  lcd.print("Started");
  lcd.setCursor(3, 1);
  lcd.print("Measuring");
}

void loop()
{
  AsyncElegantOTA.loop();

  lcd.clear();
  lcd.setCursor(2, 0);
  lcd.print("*Measuring*");
  lcd.setCursor(2, 1);
  lcd.print("Reading : ");

  // wait 1 hour for get first reading
  // delay(3600000);

  lcd.setCursor(10, 1);
  lcd.print(count + 1);

  Serial.print(count);
  Serial.print(" | ");

  // for calculating Temperature value
  Temperature_sensor.requestTemperatures();
  temperatureC[count] = Temperature_sensor.getTempCByIndex(0);
  Serial.print("Temperature Value = ");
  Serial.print(temperatureC[count]);
  Serial.print("ºC | ");

  // for calculating ldr value
  LDR_val[count] = analogRead(LDR_pin);
  Serial.print("LDR Value = ");
  Serial.print(LDR_val[count]);
  Serial.print(" | ");

  // for calculating pH value
  float pH_val = analogRead(pH_Pin);
  float voltage = pH_val * (3.3 / 4095.0);
  Serial.print("pH Value = ");
  pH[count] = (3.3 * voltage);
  Serial.print(pH[count]);
  Serial.print(" | ");

  Serial.println("");
  delay(2000);
  count++;

  if (count == ARRAY_SIZE)
  {
    Serial.println("Ready for uplaod");

    lcd.clear();
    lcd.setCursor(2, 0);
    lcd.print("Ready for");
    lcd.setCursor(5, 1);
    lcd.print("UPLOAD");

    while (true)
    {
      buttonStateForUpload = digitalRead(buttonPinForUpload);
      if (buttonStateForUpload != lastButtonStateForUpload)
      {
        if (buttonStateForUpload == LOW)
        {
          delay(3000); // add debounce delay
          Serial.println("upload button pressed............................................");

          connectAWS();
          publishMessage();
          delay(1000);

          break;
        }
        lastButtonStateForUpload = buttonStateForUpload;
      }

      client.loop();
    }

    // connectAWS();
    // publishMessage();
    // client.loop();

    Serial.println("Data Sucessfully Uploaded");

    lcd.clear();
    lcd.setCursor(2, 0);
    lcd.print("Sucessfully");
    lcd.setCursor(4, 1);
    lcd.print("Uploaded");

    delay(5000);

    lcd.clear();
    lcd.setCursor(3, 0);
    lcd.print("Ready For");
    lcd.setCursor(5, 1);
    lcd.print("Reset");

    while (true)
    {
      buttonStateForGps = digitalRead(buttonPinForGps);
      if (buttonStateForGps != lastButtonStateForGps)
      {
        if (buttonStateForGps == LOW)
        {
          delay(3000); // add debounce delay

          lcd.clear();
          lcd.setCursor(4, 0);
          lcd.print("FINISHED");
          lcd.setCursor(0, 1);
          lcd.print("You can turn off");
          // Serial.println("meassage before gps  button pressed................................................");
          // Serial.println("meassage after gps  button pressed.................................................");
          break;
        }
        lastButtonStateForGps = buttonStateForGps;
      }
    }

    while (true)
    {
      /* code */
    }
  }
}