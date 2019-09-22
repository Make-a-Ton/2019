import 'package:flutter/material.dart';
import 'req_me.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  final username = TextEditingController();
  final password = TextEditingController();

  @override
  void dispose() {
    username.dispose();
    password.dispose();
    super.dispose();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        backgroundColor: Color(0xFF4BB8AA),
        title: Text('Home'),
      ),

      body: Center(
          child: Padding(
        padding: const EdgeInsets.all(30.0),
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Padding(padding: EdgeInsets.only(top: 10.0)),
              Text(
                'PLAST.IC',
                style: TextStyle(fontSize: 25.0, color: Colors.orange[400]),
              ),
              Padding(padding: EdgeInsets.only(top: 50.0)),
              TextField(
                decoration: new InputDecoration(
                  labelText: "Enter Email",
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(25.0),
                    borderSide: BorderSide(),
                  ),
                ),
                keyboardType: TextInputType.emailAddress,
                controller: username,
              ),
              Padding(padding: EdgeInsets.only(top: 20.0)),
              TextField(
                decoration: new InputDecoration(
                  labelText: "Enter Password",
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(25.0),
                    borderSide: BorderSide(),
                  ),
                ),
                obscureText: true,
                controller: password,
              ),
              Padding(
                padding: EdgeInsets.only(top: 20.0),
              ),
              RaisedButton(
                shape: RoundedRectangleBorder(
                    borderRadius: new BorderRadius.circular(15.0)),
                textColor: Colors.orange[900],
                color: Colors.teal[200],
                onPressed: () {
                  print(username.text);
                  print(password.text);
                  postUserID(context, username.text, password.text);
//                  Navigator.push(
//                      context,
//                      MaterialPageRoute(
//                        builder: (context) => YoPage(),
//                      ));
                },
                child: Text('GO'),
              ),
            ],
          ),
        ),
      )),
    );
  }
}
