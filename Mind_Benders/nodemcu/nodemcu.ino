//Michael Klements
//The DIY Life
//27 October 2014
#include<SoftwareSerial.h>
#include <ESP8266WiFi.h>
#include <Firebase.h>  
#include <FirebaseArduino.h>  
#include <FirebaseCloudMessaging.h>  
#include <FirebaseError.h>  
#include <FirebaseHttpClient.h>  
#include <FirebaseObject.h>  
#define FIREBASE_HOST "power-app-6bee3.firebaseio.com"

#define FIREBASE_AUTH "dFDbWQXiZMS93zjvUjgins8WB2FOaBtHV2DNvBUo"

#define WIFI_SSID "CITTIC CUSAT"

#define WIFI_PASSWORD "#appy#acking"
int peakPower = 0;
void setup() 
{ 
  Serial.begin(9600);
  delay(10);
  Serial.println("Connecting to ");
  Serial.println(WIFI_SSID); 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); 
       while (WiFi.status() != WL_CONNECTED) 
          {
            delay(500);
            Serial.print(".");
          }
      Serial.println("");
      Serial.println("WiFi connected"); 
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop() 
{ 
  float RMSCurrent = 0,kilos;
  RMSCurrent = Serial.read();
  int RMSPower = 220*RMSCurrent;    //Calculates RMS Power Assuming Voltage 220VAC, change to 110VAC accordingly
  if (RMSPower > peakPower)
  {
    peakPower = RMSPower;
  }
  kilos = kilos + (RMSPower * (2.05/60/60/1000));    //Calculate kilowatt hours used
  Firebase.setFloat("rmscurrent", RMSCurrent);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  Firebase.setFloat("rmspower", RMSPower);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  Firebase.setFloat("wh", kilos);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
}
