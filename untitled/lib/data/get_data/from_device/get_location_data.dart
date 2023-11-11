import 'dart:async';
import 'package:geolocator/geolocator.dart';
import 'package:untitled/core/controllers/location_controller.dart';


class GetLocationData implements LocationControllerInterface {

  @override
  Future<Position> getCurrentLocation() async {
    Position? currentPosition;

    const LocationSettings locationSettings = LocationSettings(
      accuracy: LocationAccuracy.high,
      distanceFilter: 5,
    );
    StreamSubscription<Position> positionStream = Geolocator.getPositionStream(
        locationSettings: locationSettings).listen((Position? position) {
          currentPosition = position;
        });
    // When we reach here, permissions are granted and we can
    // continue accessing the position of the device.
    return currentPosition == null ? await Geolocator.getCurrentPosition() : currentPosition!;
  }

}