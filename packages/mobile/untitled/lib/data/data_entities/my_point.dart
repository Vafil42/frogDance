import 'my_coordinates.dart';


class MyPoint {
  final String name;
  final String image;
  final String? description;
  final MyCoordinates? coordinates;


  MyPoint({
    required this.name,
    required this.image,
    required this.description,
    required this.coordinates,
  });


  factory MyPoint.fromJson(Map<String, dynamic> json) {
    return MyPoint(
      name: json["name"],
      image: json["image"],
      description: json["description"],
      coordinates: MyCoordinates.fromJson(json["coordinates"]),
    );
  }


  Map<String, dynamic> toJson() {
    return {
      "name": name,
      "image": image,
      "description": description,
      "coordinates": coordinates!.toJson(),
    };
  }
}