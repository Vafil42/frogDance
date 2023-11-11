import 'package:untitled/data/get_data/from_server/get_server_data.dart';
import 'package:http/http.dart' as http;

abstract class ServerControllerInterface {
  getCatalog(http.Client client);
}


class ServerController {
  final ServerControllerInterface _serverController = GetServerData();

  Future<List> getCatalogList(http.Client client) async {
    return _serverController.getCatalog(client);
  }
}