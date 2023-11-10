import 'my_route.dart';


class MyRoutes {
  final List<MyRoute>? routes;


  MyRoutes({required this.routes});


  factory MyRoutes.fromJson(Map<String, dynamic> json) {
    return MyRoutes(
        routes: List<MyRoute>.from(json["routes"].map((route) => MyRoute.fromJson(route)))
    );
  }


  Map<String, dynamic> toJson() {
    return {
      "routes": List<dynamic>.from(routes!.map((route) => route.toJson()))
    };
  }
}