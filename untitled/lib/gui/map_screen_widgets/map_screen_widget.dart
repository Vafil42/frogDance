import 'dart:async';
import 'dart:math';
import 'package:bottom_sheet/bottom_sheet.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:location/location.dart';
import 'package:untitled/gui/win_screen_widgets/win_screen_wodget.dart';
import '../../data/data_entities/my_point.dart';


class MapScreenWidget extends StatefulWidget {
  const MapScreenWidget({super.key, required this.myPointList});
  final List<MyPoint> myPointList;

  @override
  State<MapScreenWidget> createState() => _MapScreenWidgetState(myPointList: myPointList);
}


class _MapScreenWidgetState extends State<MapScreenWidget> {
  _MapScreenWidgetState({required this.myPointList});
  LocationData? _currentLocationData;
  double distance = 0;
  int _currentMarkerIndex = -1;
  bool _userIsCame = false;
  bool _isBottomSheetShow = true;
  List<MyPoint> myPointList;
  final List<Marker> _markerList = [];
  final Completer<GoogleMapController> _controller = Completer<GoogleMapController>();


  @override
  void initState() {
    Location location = Location();
    location.getLocation().then((newLocation) {
      _currentLocationData = newLocation;
      setState(() {});
    });

    location.onLocationChanged.listen((newLocation) {
      _currentLocationData = newLocation;

      setState(() {
        if(_currentMarkerIndex != _markerList.length - 2) {
          checkIsUserCame(_markerList[_currentMarkerIndex + 1]);
        }
        if(_userIsCame) {
          if(_isBottomSheetShow) {
            getBottomSheet();
            if(_currentMarkerIndex != _markerList.length - 1) {
              _currentMarkerIndex++;
              print(_currentMarkerIndex);
            } else  if(_currentMarkerIndex == _markerList.length){
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (BuildContext context) => const WinScreenWidget()
                  ),
              );
            }
            _isBottomSheetShow = false;
          }
        } else {
          _isBottomSheetShow = true;
        }
      });
    });
    super.initState();
  }


  checkIsUserCame(Marker destinationMarker) {
    double currentLatitude = _currentLocationData!.latitude!;
    double currentLongitude = _currentLocationData!.longitude!;
    double destinationLatitude = destinationMarker.position.latitude;
    double destinationLongitude = destinationMarker.position.longitude;

    double powLatitude = ((currentLatitude - destinationLatitude)*(currentLatitude - destinationLatitude));
    double powLongitude = ((currentLongitude - destinationLongitude)*(currentLongitude - destinationLongitude));

    double sumCoordinates = powLatitude + powLongitude;

    distance = sqrt(sumCoordinates) * 10000;


    if (distance <= 5) {
      _userIsCame = true;
    } else {
      _userIsCame = false;
    }
  }


  addCurrentLocationMarker(double latitude, double longitude) {
    _markerList.add(
        Marker(
          markerId: const MarkerId('currentLocationMarker'),
          position: LatLng(latitude, longitude),
          icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueAzure),
        )
    );
  }


  @override
  Widget build(BuildContext context) {

    return _currentLocationData == null ? const Scaffold(
      backgroundColor: Colors.white70,
      body: Center(
        child: Text(
            'Loading...',
            style: TextStyle(
                color: Colors.black,
                fontSize: 15
            )
        ),
      ),
    ) :
    SafeArea(
      child: GoogleMap(
        onMapCreated: (mapController) {
          _controller.complete(mapController);
        },
        initialCameraPosition: CameraPosition(
            target: LatLng(
              _currentLocationData!.latitude!,
              _currentLocationData!.longitude!,
            ),
            zoom: 15.5
        ),
        markers: {...getRouteMarkers()},
      ),
    );
  }


  getBottomSheet() {
    showFlexibleBottomSheet(
      bottomSheetColor: Colors.black54,
      bottomSheetBorderRadius: const BorderRadius.only(
        topLeft: Radius.circular(30),
        topRight: Radius.circular(30)
      ),
      minHeight: 0.6,
      initHeight: 0.6,
      maxHeight: 1,
      context: context,
      builder: _buildBottomSheet,
      isExpand: true,
    );
    _isBottomSheetShow = true;
  }

  Widget _buildBottomSheet(
      BuildContext context,
      ScrollController scrollController,
      double bottomSheetOffset,
      ) {
    return ListView(
      controller: scrollController,
      children: [
        Container(
            alignment: Alignment.center,
            child: Column(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  child: AspectRatio(
                    aspectRatio: 11 / 9,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(30),
                      child: Image.network(
                        myPointList[_currentMarkerIndex].image,
                        width: 300,
                        height: 500,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  padding: const EdgeInsets.only(bottom: 10, right: 10, left: 10),
                  child: const Text(
                    'Описание:',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12
                    ),
                  ),
                ),
                Container(
                    padding: const EdgeInsets.only(bottom: 10, right: 10, left: 10),
                    child: Text(
                    '${myPointList[_currentMarkerIndex].description}',
                    style: const TextStyle(
                        color: Colors.white
                    ),
                  ),
                )
              ],
            )
        )
      ],
    );
  }


  List<Marker> getRouteMarkers() {
    for(int i = 0; i < myPointList.length; i++) {
      _markerList.add(
          Marker(
            markerId: MarkerId(i.toString()),
            position: LatLng(
                myPointList[i].coordinates!.latitude,
                myPointList[i].coordinates!.longitude,
            ),
          )
      );
    }
    _markerList.add(
        Marker(
          markerId: const MarkerId('currentUserLocation'),
          position: LatLng(
            _currentLocationData!.latitude!,
            _currentLocationData!.longitude!,
          ),
          icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueAzure),
        )
    );
    return _markerList;
  }
}
