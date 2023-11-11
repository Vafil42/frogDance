import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:untitled/core/controllers/server_controller.dart';
import 'package:http/http.dart' as http;

import '../../data_entities/my_route.dart';


class GetServerData implements ServerControllerInterface {


  @override
  Future<List> getCatalog(http.Client client) async {
    final fileContent = await rootBundle.loadString('assets/jsons/routes.json');
    final jsonData = json.decode(fileContent) as Map<String, dynamic>;
    /*final response = await client.get(Uri.parse('http://192.168.0.17:8080/routes/get-all'));
    return parseCompanies(response.body);*/


    return jsonData["routes"].map((element) => MyRoute.fromJson(element)).toList();
  }


  List<MyRoute> parseCompanies(String responseBody) {
    final jsonData = json.decode(responseBody) as Map<String, dynamic>;

    return jsonData["routes"].map((element) => MyRoute.fromJson(element)).toList();
  }
}