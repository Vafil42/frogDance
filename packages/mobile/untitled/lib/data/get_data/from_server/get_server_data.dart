import 'dart:convert';

import 'package:untitled/core/controllers/server_controller.dart';
import 'package:http/http.dart' as http;

import '../../data_entities/my_route.dart';


class GetServerData implements ServerControllerInterface {


  @override
  Future<List> getCatalog(http.Client client) async {
    final response = await client.get(Uri.parse('https://localhost/companies'));
    return parseCompanies(response.body);
  }


  List<MyRoute> parseCompanies(String responseBody) {
    final jsonData = json.decode(responseBody) as Map<String, dynamic>;

    return jsonData["routes"].map((element) => MyRoute.fromJson(element)).toList();
  }
}