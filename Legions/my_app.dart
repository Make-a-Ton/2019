import 'package:flutter/material.dart';
import 'package:intro_views_flutter/intro_views_flutter.dart';
import 'package:intro_views_flutter/Models/page_view_model.dart';
import 'package:onboarding_page/home_page.dart';
import 'home_page.dart';




class MyApp extends StatelessWidget {
  final pages = [
    PageViewModel(
      title: Padding(
        padding: const EdgeInsets.only(top: 40.0),
        child: Text('plast.ic'),
      ),
      body: Text('you take your trash to a collection point'),
      mainImage: Image.asset(
        'assets/one.jpg',
        height: 300.0,
        width: 300.0,
        alignment: Alignment.center,
      ),
      titleTextStyle: TextStyle(fontFamily: 'MyFont', color: Colors.black),
      bodyTextStyle: TextStyle(fontFamily: 'MyFont', color: Color(0xFF4BB8AA)),
      pageColor: Colors.white,
      // iconImageAssetPath: 'assets/air-hostess.png',
      bubbleBackgroundColor: Color(0xFFC8E6E3),

    ),
    PageViewModel(
      pageColor: Colors.white,
      bubbleBackgroundColor: Color(0xFFC8E6E3),
      body: Text(
        'app generates credits in your ILC wallet',
      ),
      title: Padding(
        padding: const EdgeInsets.only(top: 40.0),
        child: Text('plast.ic'),
      ),
      mainImage: Image.asset(
        'assets/two.jpg',
        height: 300.0,
        width: 300.0,
        alignment: Alignment.center,
      ),
      titleTextStyle: TextStyle(fontFamily: 'MyFont', color: Colors.black),
      bodyTextStyle: TextStyle(fontFamily: 'MyFont', color: Color(0xFF4BB8AA)),
    ),
    PageViewModel(
      pageColor:  Colors.white,
      bubbleBackgroundColor: Color(0xFFC8E6E3),
      body: Text(
        'and you trade for discounts in daily life products',
      ),
      title: Padding(
        padding: const EdgeInsets.only(top: 40.0),
        child: Text('plast.ic'),
      ),
      mainImage: Image.asset(
        'assets/three.jpg',
        height: 300.0,
        width: 300.0,
        alignment: Alignment.center,
      ),
      titleTextStyle: TextStyle(fontFamily: 'MyFont', color: Colors.black),
      bodyTextStyle: TextStyle(fontFamily: 'MyFont', color: Color(0xFF4BB8AA)),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Builder(
      builder: (context) => IntroViewsFlutter(
        pages,
        onTapDoneButton: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => HomePage(),
            ), //MaterialPageRoute
          );
        },
        pageButtonTextStyles: TextStyle(
          color: Colors.black,
          fontSize: 14.0,
        ),
      ), //IntroViewsFlutter
    );
  }
}