#include <TinyGPSPlus.h>
// The TinyGPSPlus object
TinyGPSPlus gps;
void setup()
{
    Serial.begin(9600);
    Serial2.begin(9600);
    delay(3000);
}

void loop()
{
    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("No GPS detected: check wiring."));
//        delay(2000);
//        while (true)
//            ;
    }
    while (Serial2.available() > 0)
    {
        if (gps.encode(Serial2.read()))
        {
            displayInfo();
        }
    }
}

void displayInfo()
{
    Serial.print(F("Location: "));
    if (gps.location.isValid())
    {
        Serial.print("Lat: ");
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print("Lng: ");
        Serial.print(gps.location.lng(), 6);
        Serial.println();
    }
    else
    {
        Serial.println(F("INVALID"));
    }
}
