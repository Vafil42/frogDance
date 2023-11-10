class MyCompany {
  final String id;
  final String name;
  final String description;
  final String image;


  MyCompany({
    required this.id,
    required this.name,
    required this.description,
    required this.image,
  });


  factory MyCompany.fromJson(Map<String, dynamic> json) {
    return MyCompany(
      id: json["id"],
      name: json["name"],
      description: json["description"],
      image: json["image"],
    );
  }


  Map<String, dynamic> toJson() {
    return {
      "id": id,
      "name": name,
      "description": description,
      "image": image,
    };
  }
}