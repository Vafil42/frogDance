import 'package:flutter/material.dart';

class CustomAppBarWidget extends StatefulWidget {
  const CustomAppBarWidget({super.key});

  @override
  State<CustomAppBarWidget> createState() => _CustomAppBarWidgetState();
}

class _CustomAppBarWidgetState extends State<CustomAppBarWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.black87
      ),
      child: AppBar(
        title: const Align(
          alignment: Alignment.center,
          child: Text(
            'Frog Dance',
            style: TextStyle(
                color: Colors.white,
                fontFamily: 'Pacifico-Regular',
                fontSize: 19
            ),
          ),
        ) ,
        backgroundColor: Colors.black,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.only(
              bottomLeft: Radius.circular(20),
              bottomRight: Radius.circular(20),
            )
        ),
      ),
    );
  }
}
