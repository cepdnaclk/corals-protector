#define pushButton_pin_for_publish_msg 25

void IRAM_ATTR publishMsg()
{
  digitalWrite(LED_pin, !digitalRead(LED_pin));
}

void setup()
{
  pinMode(pushButton_pin_for_publish_msg, INPUT_PULLUP);
  attachInterrupt(pushButton_pin_for_publish_msg, publishMsg, RISING);
} 

void loop()
{
}
