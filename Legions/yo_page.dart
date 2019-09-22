import 'package:flutter/material.dart';
import 'spl_screen.dart';

class YoPage extends StatefulWidget {

  YoPage(this.s);
  final String s;

  @override
  _YoPageState createState() => _YoPageState();
}

class _YoPageState extends State<YoPage> {
  @override
  Widget build(BuildContext context) {




    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Container(
              child: Text(widget.s,style: TextStyle(fontSize: 30.0),),
            ),
            FloatingActionButton(
                child: Icon(Icons.chevron_right),
              backgroundColor: Color(0xFF4BB8AA),
              onPressed: ()
              {
                forward(context);
              },

            ),
          ],
        ),
      ),
    );
  }
}

void forward(BuildContext context) {
  Navigator.push(context, MaterialPageRoute(builder: (context) => SplScreen(),),);
}