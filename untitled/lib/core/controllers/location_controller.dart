import 'package:geolocator/geolocator.dart';
import 'package:untitled/data/get_data/from_device/get_location_data.dart';

abstract class LocationControllerInterface {
  getCurrentLocation();
}


class LocationController {
  final LocationControllerInterface _controllerInterface = GetLocationData();


  Future<Position> getCurrentLocationData() async {
    return _controllerInterface.getCurrentLocation();
  }
}