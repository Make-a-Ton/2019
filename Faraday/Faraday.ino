#include <SoftwareSerial.h>

SoftwareSerial BTserial(10, 11); // RX | TX

int sensorPin = A0;
int sensorPulse = A3;
int LED1 = 3;

int sensorValue = 0;

void setup() {
pinMode(LED1,OUTPUT);
BTserial.begin(9600); }

void loop() {

sensorValue = analogRead(sensorPin);

//IMPORTANT: The complete String has to be of the Form: 1234,1234,1234,1234;

//(every Value has to be seperated through a comma (',') and the message has to

//end with a semikolon (';'))

if(sensorValue<100){

BTserial.print("Alert!!!");
 digitalWrite(LED1,HIGH);
}
else
BTserial.print(sensorValue);

BTserial.print(";");
digitalWrite(LED1,LOW); 

//message to the receiving device

delay(20);

}
