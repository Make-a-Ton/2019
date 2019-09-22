import 'package:flutter/material.dart';
import 'package:onboarding_page/NewsArticle.dart';
import 'package:onboarding_page/NewsHelper.dart';

class SplScreen extends StatefulWidget {
  @override
  _SplScreenState createState() => _SplScreenState();
}

class _SplScreenState extends State<SplScreen> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("", style: TextStyle(fontWeight: FontWeight.w400),),
        backgroundColor: Colors.black,
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 24.0),
            child: Icon(Icons.notifications_none, color: Colors.grey,),
          ),
          Padding(
            padding: const EdgeInsets.only(right: 12.0),
            child: Icon(Icons.search, color: Colors.grey),
          ),
        ],
      ),

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 0, // this will be set when a new tab is tapped
        items: [
          BottomNavigationBarItem(
            icon:  Icon(Icons.add_shopping_cart,size: 36.0,),
            title: new Text('Pickup',style: TextStyle(fontSize: 16),),
          ),
          BottomNavigationBarItem(
            icon: new Icon(Icons.shopping_basket),
            title: new Text('Shop',style: TextStyle(fontSize: 18),),
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.filter_center_focus),
              title: Text('QR Scan',style: TextStyle(fontSize: 18),)
          )
        ],
      ),

      body: ListView.builder(

        itemBuilder: (context, position) {

          NewsArticle article = NewsHelper.getArticle(position);

          return Padding(
            padding: const EdgeInsets.fromLTRB(0.0,0.5,0.0,0.5),
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0.0,12.0,0.0,12.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Expanded(
                            child: Container(

                                child: Image.asset("assets/" + article.imageAssetName, fit: BoxFit.cover,)
                            ),
                          ),
                        ],
                      ),
                    ),

//                    Row(
//                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
//                      children: <Widget>[
//                        Column(
//                          crossAxisAlignment: CrossAxisAlignment.start,
//                          children: <Widget>[
//                            Text(article.author, style: TextStyle(fontSize: 18.0),),
//                            Text(article.date + " . " + article.readTime, style: TextStyle(color: Colors.black45, fontWeight: FontWeight.w500),)
//                          ],
//                        ),
//                        Icon(Icons.bookmark_border),
//                      ],
//                    )

                  ],
                ),
              ),
            ),

          );
        },
        itemCount: NewsHelper.articleCount,
      ),
      drawer: Drawer(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(32.0,64.0,32.0,16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Container(
                      width: 90.0,
                      height: 90.0,
                      decoration: new BoxDecoration(
                          shape: BoxShape.circle,
                          image: new DecorationImage(
                            fit: BoxFit.fill,
                            image: AssetImage('assets/Snapseed.jpg'),
                          )
                      ),),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text("Aravind", style: TextStyle(fontSize: 20.0),),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text("See profile", style: TextStyle(color: Colors.black45),),
                    ),

                  ],
                ),
              ),
            ),
            Expanded(
              child: Container(
                color: Colors.black12,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(40.0,16.0,40.0,40.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text("Pickup History", style: TextStyle(fontSize: 18.0),),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text("Credits", style: TextStyle(fontSize: 18.0),),
                      ),
                      Divider(),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text("Become a royalty member", style: TextStyle(fontSize: 18.0, color: Colors.teal),),
                      ),
                      Divider(),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text("ABOUT US", style: TextStyle(fontSize: 18.0),),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text("Contact Us", style: TextStyle(fontSize: 18.0),),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}


class navBar extends StatefulWidget {
  @override
  _navBarState createState() => _navBarState();
}

class _navBarState extends State<navBar> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.shop, size: 36.0),
            title: Text(
              'Shop',
              style: TextStyle(fontSize: 20),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.add_shopping_cart,
              size: 36.0,
            ),
            title: Text(
              'Pickup',
              style: TextStyle(fontSize: 18),
            ),
          ),

          BottomNavigationBarItem(
            icon: Icon(
              Icons.filter_center_focus,
              size: 36,
            ),
            title: Text('QR Scan', style: TextStyle(fontSize: 20)),
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }

  int _selectedIndex = 0;
  static const TextStyle optionStyle =
  TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Index 0: Home',
      style: optionStyle,
    ),
    Text(
      'Index 1: Shop',
      style: optionStyle,
    ),
    Text(
      'Index 2: School',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}

