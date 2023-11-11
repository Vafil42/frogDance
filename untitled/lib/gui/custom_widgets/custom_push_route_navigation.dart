import 'package:flutter/material.dart';

import '../../data/data_entities/my_route.dart';
import '../info_screen_widgets/info_screen_widget.dart';

Route routeToInfoScreenContainer(MyRoute myRouteItem) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) =>
        InfoScreenWidget(myRouteItem: myRouteItem),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}