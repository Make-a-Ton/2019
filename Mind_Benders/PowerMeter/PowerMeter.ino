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
  //int current = 0;
  //current = Serial.read();
  //double RMSCurrent = ((maxCurrent - 516)*0.707)/11.8337;    //Calculates RMS current based on maximum value
  //int RMSPower = 220*RMSCurrent;    //Calculates RMS Power Assuming Voltage 220VAC, change to 110VAC accordingly
  /*if (RMSPower > peakPower)
  {
    peakPower = RMSPower;
  }
  kilos = kilos + (RMSPower * (2.05/60/60/1000));    //Calculate kilowatt hours used
  */
  Firebase.setFloat("rmscurrent", 42.0);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  Firebase.setFloat("rmspower", 43.0);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  Firebase.setFloat("wh", 45.0);  
  // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /number failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
}
