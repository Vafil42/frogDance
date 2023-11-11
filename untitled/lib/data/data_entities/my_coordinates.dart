class MyCoordinates {
  final double latitude;
  final double longitude;

  MyCoordinates({
    required this.latitude,
    required this.longitude,
  });


  factory MyCoordinates.fromJson(Map<String, dynamic> json) {
    return MyCoordinates(
      latitude: json["latitude"],
      longitude: json["longitude"],
    );
  }


  Map<String, dynamic> toJson() {
    return {
      "latitude": latitude,
      "longitude": longitude
    };
  }
}