import 'my_company.dart';
import 'my_point.dart';

class MyRoute {
  final String? id;
  final String? name;
  final MyCompany? company;
  final String? description;
  final String? image;
  final List<MyPoint>? points;


  MyRoute({
    required this.id,
    required this.name,
    required this.company,
    required this.description,
    required this.image,
    required this.points
  });


  factory MyRoute.fromJson(Map<String, dynamic> json) {
    return MyRoute(
        id: json['id'],
        name: json['name'],
        company: MyCompany.fromJson(json['company']),
        description: json['description'],
        image: json['image'],
        points: List<MyPoint>.from(json["points"].map((routeJson) => MyPoint.fromJson(routeJson)))
    );
  }


  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'company': company?.toJson(),
      'description': description,
      'image': image,
      'points': List<dynamic>.from(points!.map((point) => point.toJson())),
    };
  }
}