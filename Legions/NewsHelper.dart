import 'NewsArticle.dart';

class NewsHelper {

  static var articleCount = 4;

  static var categoryTitles = ["PRODUCT MANAGEMENT", "FROM YOUR NETWORK", "BASED ON YOUR READING HISTORY", "GAMING"];
  static var titles = ["RedBus", "Amazon", "How the CIA mad Google", "The best Mario Kart character according to data science"];
  static var authorNames = ["Raouf Rahchie", 'Bold Commerce',"Ahmad Izzan", "Henry Heinfield", ];
  static var date = ["15 Jun", "15 hours ago", "27 Sep", "14 Jun"];
  static var readTimes = ["7 min read", "14 min read", "8 min read", "8 min read"];
  static var imageAssetName = ["redbus.jpg","am.jpg","play.jpg","apple.jpg"];

  static getArticle(int position) {
    return NewsArticle(categoryTitles[position], titles[position], authorNames[position],date[position],readTimes[position], imageAssetName[position]);
  }

}