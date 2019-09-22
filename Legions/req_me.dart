import 'dart:convert';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart'as http;
import 'package:onboarding_page/yo_page.dart';

//String url = "http://172.16.15.144:8000";
String url = "http://ec2-13-232-192-167.ap-south-1.compute.amazonaws.com:8000";
String iD = "";
double plastic = 0.0;
double credits = 0.0;

Future postUserID(BuildContext context, String username, String password)async
{
  http.Response response = await http.post("$url/login",
      headers: {"Content-Type": "application/json"},
      body: jsonEncode({"user":username, "pass":password}));
  if(response.statusCode == 200)
  {
    var decodedData = jsonDecode(response.body);
    iD = decodedData['user']['id'];
    print(iD);
    print(decodedData['message']);
//    if(decodedData['message'] == 'Welcome New User')
//      {
    Navigator.push(context, MaterialPageRoute(builder: (context) => YoPage(decodedData["message"])));
//      }
    plastic = decodedData['user']['plastic'];
    credits = decodedData['user']['credits'];

  }
  else
  {
    print(response.statusCode);
    return "Error";
  }
}

Future getAddPlastic(double p)async
{
  http.Response response = await http.get("$url/add/$iD/$p");
  if(response.statusCode == 200)
  {
    var decodedData = jsonDecode(response.body);
    iD = decodedData['id'];
    print(iD);
    plastic = decodedData['plastic'];
    credits = decodedData['credits'];
  }
  else
  {
    print(response.statusCode);
  }
}

