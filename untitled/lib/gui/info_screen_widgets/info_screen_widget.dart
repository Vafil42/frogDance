import 'package:flutter/material.dart';
import '../../data/data_entities/my_route.dart';
import '../map_screen_widgets/map_screen_widget.dart';

class InfoScreenWidget extends StatelessWidget {
  const InfoScreenWidget({super.key, required this.myRouteItem});
  final MyRoute myRouteItem;


  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Stack(
          alignment: Alignment.bottomCenter,
          children: [
            SingleChildScrollView(
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: const BoxDecoration(
                  color: Color.fromARGB(255, 23, 23, 23),
                ),
                child: Column(
                  children: [
                    Container(
                      height: 60,
                      padding: const EdgeInsets.only(left: 5),
                      child: Row(
                        children: [
                          SizedBox(
                            width: 50,
                            child: CircleAvatar(
                              backgroundColor: Colors.transparent,
                              radius: 100,
                              backgroundImage: Image.network(myRouteItem.image!).image,
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Container(
                                padding: const EdgeInsets.only(left: 5, top: 4, right: 5, bottom: 4),
                                child: Text(
                                  myRouteItem.name!,
                                  style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 14
                                  ),
                                ),
                              ),
                              Container(
                                height: 20,
                                padding: const EdgeInsets.only(left: 10, right: 10, bottom: 4),
                                child: const Text(
                                  'Лучшая на свете компания для туризма',
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 9
                                  ),
                                ),
                              )
                            ],
                          )
                        ],
                      ),
                    ),
                    Stack(
                      children: [
                        Container(
                          alignment: Alignment.centerLeft,
                          padding: const EdgeInsets.only(top: 10),
                          child: AspectRatio(
                            aspectRatio: 11/9,
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(20),
                              child: Image.network(
                                myRouteItem.image!,
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          flex: 1,
                          child: Container(
                            alignment: Alignment.centerLeft,
                            padding: const EdgeInsets.only(top: 15),
                            child: const Text(
                              'Название маршрута:',
                              style: TextStyle(
                                  fontSize: 10,
                                  color: Colors.white
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 1,
                          child: Container(

                            alignment: Alignment.centerRight,
                            padding: const EdgeInsets.only(top: 15),
                            child: const Text(
                              'Пункты назначения:',
                              style: TextStyle(
                                  fontSize: 10,
                                  color: Colors.white
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          flex: 4,
                          child: Container(
                            alignment: Alignment.centerLeft,
                            padding: const EdgeInsets.only(top: 5),
                            child: Text(
                              myRouteItem.name!,
                              style: const TextStyle(
                                  fontSize: 30,
                                  color: Colors.white
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          flex: 1,
                          child: Container(
                            alignment: Alignment.centerRight,
                            padding: const EdgeInsets.only(top: 5),
                            child: Text(
                              myRouteItem.points!.length.toString(),
                              style: const TextStyle(
                                  fontSize: 30,
                                  color: Colors.white
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    Container(
                      alignment: Alignment.centerLeft,
                      padding: const EdgeInsets.only(top: 18),
                      child: const Text(
                        "Описание:",
                        style: TextStyle(
                            fontSize: 15,
                            color: Colors.white
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.only(top: 5),
                      child: Text(
                        myRouteItem.description!,
                        style: const TextStyle(
                            color: Colors.white,
                            fontSize: 15
                        ),
                      ),
                    ),
                    const SizedBox(
                      height: 80,
                    )
                  ],
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.only(bottom: 30),
              child: InkWell(
                onTap: () {
                  Navigator.push (
                    context,
                    MaterialPageRoute (
                      builder: (BuildContext context) =>
                          MapScreenWidget(myPointList: myRouteItem.points!),
                    ),
                  );
                },
                borderRadius: BorderRadius.circular(30),
                child: Container(
                  alignment: Alignment.center,
                  height: 50,
                  width: 230,
                  decoration: BoxDecoration(
                    color: Colors.blue,
                    borderRadius: BorderRadius.circular(30)
                  ),
                  child: const Text(
                    'Начать петешествие',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16
                    ),
                  ),
                ),
              ),
            )
          ],
        )
      ),
    );
  }
}