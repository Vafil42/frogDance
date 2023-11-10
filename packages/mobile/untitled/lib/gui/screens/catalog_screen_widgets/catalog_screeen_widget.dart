import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:untitled/core/controllers/server_controller.dart';
import 'package:http/http.dart' as http;

class CatalogScreenWidget extends StatefulWidget {
  const CatalogScreenWidget({super.key});

  @override
  State<CatalogScreenWidget> createState() => _CatalogScreenWidgetState();
}

class _CatalogScreenWidgetState extends State<CatalogScreenWidget> {
  late Future<List> _catalogFuture;


  @override
  void initState() {
    _catalogFuture = ServerController().getCatalogList(http.Client());
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    
    return Container(
      decoration: const BoxDecoration(
        color: Colors.black87
      ),
      child: FutureBuilder(
        future: _catalogFuture,
        builder: (context, snapshot) {
          if(snapshot.hasData) {
            return Container(
              decoration: const BoxDecoration(
                  color: Colors.green
              ),
            );
          } else if(snapshot.hasError) {
            return Center(
              child: Container(
                padding: const EdgeInsets.only(bottom: 60),
                child: const SvgPicture(
                  SvgAssetLoader('assets/svg/404.svg'),
                  width: 300,
                ),
              )
            );
          }
          return const Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}
