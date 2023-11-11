import 'package:flutter/material.dart';
import 'package:untitled/gui/catalog_screen_widgets/catalog_screeen_widget.dart';
import 'package:untitled/gui/main_screen_container_widget.dart';

class WinScreenWidget extends StatelessWidget {
  const WinScreenWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(child: Scaffold(
      body: Container(
        padding: const EdgeInsets.only(
          bottom: 200,
          left: 60,
          right: 60,
          top: 200
        ),
        decoration: const BoxDecoration(
          color: Colors.black87,
        ),
        child: Container(
          decoration: BoxDecoration(
              color: Colors.black54,
              borderRadius: BorderRadius.circular(30)
          ),
          child: Column(
            children: [
              Expanded(
                flex: 20,
                child: Container(
                  alignment: Alignment.center,
                  height: 100,
                  child: const Text(
                    'Победа!',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 30,
                      fontFamily: 'Pacifico-Regular'
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 40,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.only(right: 20, left: 20, bottom: 10),
                  child: const Text(
                    'За прохождение всего маршрута компания дарит вам награду: промокод на бесплатную путевку!',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 15
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
              Expanded(
                flex: 20,
                child: Container(
                  alignment: Alignment.center,
                  padding: const EdgeInsets.only(bottom: 30),
                  child: Container(
                    alignment: Alignment.center,
                    width: 150,
                    height: 50,
                    decoration: BoxDecoration(
                      color: Colors.grey,
                      borderRadius: BorderRadius.circular(50),
                    ),
                    child: const Text(
                      'TY43K1LN',
                      style: TextStyle(
                        color: Colors.black,
                        fontSize: 20
                      ),
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 20,
                child: Container(
                  alignment: Alignment.topCenter,
                  child: InkWell(
                    onTap: () {
                      Navigator.of(context).pushReplacement(MaterialPageRoute(
                        builder: (context) => const MainScreenContainerWidget(),
                      ));
                    },
                    borderRadius: BorderRadius.circular(50),
                    child: Container(
                      alignment: Alignment.center,
                      height: 54,
                      width: 200,
                      decoration: BoxDecoration(
                        color: Colors.green,
                        borderRadius: BorderRadius.circular(50),
                      ),
                      child: const Text(
                        'Перейти к каталогу',
                        style: TextStyle(
                            color: Colors.white
                        ),
                      ),
                    ),
                  )
                ),
              )
            ],
          ),
        ),
      ),
    ));
  }
}
