#include <OneWire.h>
#include <DallasTemperature.h>

// Temperature sensor
const int Temperature_sensor_pin = 4;           // GPIO where the DS18B20 is connected to
OneWire oneWire(Temperature_sensor_pin);        // Setup a oneWire instance to communicate with any OneWire devices
DallasTemperature Temperature_sensor(&oneWire); // Pass our oneWire reference to Dallas Temperature sensor

float temperatureC;

void setup()
{

    // Start the Serial Monitor
    Serial.begin(9600);

    Temperature_sensor.begin(); // Start the Temperature sensor

    pinMode(pH_Pin, INPUT); // for ph
    delay(1000);
}

void loop()
{
    // for calculating Temperature value
    Temperature_sensor.requestTemperatures();
    temperatureC = Temperature_sensor.getTempCByIndex(0);
    Serial.print("Temperature Value = ");
    Serial.print(temperatureC);
    Serial.print("ºC | ");
    Serial.println();
    delay(5000);
}
