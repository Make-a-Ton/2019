
/* Reading value through DHT11 and Rain Sensor ,Then Push into FirBase Database
 *  Credits : RAFI RASHEED T C || github.com/rafitc/
*/

#include <ESP8266WiFi.h>                                                    // esp8266 library
#include <FirebaseArduino.h>                                                // firebase library
#include <DHT.h>                                                            // dht11 temperature and humidity sensor library

#define FIREBASE_HOST "yourID.firebaseio.com"                          // the project name address from firebase id
#define FIREBASE_AUTH "AUTH_ID"            // the secret key generated from firebase

#define WIFI_SSID "SSID"                                             // input your home or public wifi name 
#define WIFI_PASSWORD "PASSWORD"                                    //password of wifi ssid
 
#define DHTPIN D4                                                           // what digital pin we're connected to
#define DHTTYPE DHT11                                                       // select dht type as DHT 11 or DHT22
DHT dht(DHTPIN, DHTTYPE);                                                     

const int analogPin = A0;     //rain sensor
int r = 0;
double lati = 10.041157;
double longit = 76.328070;

void setup() {
  Serial.begin(9600);
  delay(1000);                
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                     //try to connect with wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                            //print local IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                              // connect to firebase
  dht.begin();                                                               //Start reading dht sensor
}

void loop() { 
  float h = dht.readHumidity();                                              // Reading temperature or humidity takes about 250 milliseconds!
  float t = dht.readTemperature();                                           // Read temperature as Celsius (the default)
  r = analogRead(analogPin);                                                 //Read Rain sensor data
   
  if (isnan(h) || isnan(t) || isnan(r)) {                                                // Check if any reads failed and exit early (to try again).
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }
  
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h);                                         //convert integer humidity to string humidity 
  Serial.print("  Temperature: ");  Serial.print(t);  Serial.println("Â°C ");
  String fireTemp = String(t);                                                     //convert integer temperature to string temperature
  Serial.print("Rain sensor: ");  Serial.print(r);
  String rain = String(r);                                                            //Convert RainSensr data into string
  Serial.print("Long"); Serial.print(lati);                                           //GPS data
  Serial.print("Latitude"); Serial.print(longit);
  String latit = String(lati);
  String longi = String(longit);
  delay(4000);
  
  Firebase.pushString("/DHT11/Humidity", fireHumid);                                  //setup path and send readings
  Firebase.pushString("/DHT11/Temperature", fireTemp);                                //setup path and send readings
  Firebase.pushString("/DHT11/Rain", rain);                                           //setup path and send readings
  Firebase.pushString("/DHT11/latitude", latit);
  Firebase.pushString("/DHT11/longitude", longi);

  Firebase.set("/DHT12/Rain", r);                                         
  Firebase.set("/DHT12/latitude", lati);
  Firebase.set("/DHT12/longitude", longit);
}
