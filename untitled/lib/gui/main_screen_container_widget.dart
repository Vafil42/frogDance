import 'package:flutter/material.dart';
import 'package:salomon_bottom_bar/salomon_bottom_bar.dart';
import 'package:untitled/gui/custom_widgets/custom_appbar_widget.dart';
import 'catalog_screen_widgets/catalog_screeen_widget.dart';

class MainScreenContainerWidget extends StatefulWidget {
  const MainScreenContainerWidget({super.key});

  @override
  State<MainScreenContainerWidget> createState() => _MainScreenContainerWidgetState();
}

class _MainScreenContainerWidgetState extends State<MainScreenContainerWidget> {
  int _currentIndex = 1;



  getCurrentScreenListWidget(int currentIndex) {
    List<Widget> _screensList = [
      Container(
        decoration: BoxDecoration(
          color: Colors.blue
        ),
      ),
      const CatalogScreenWidget(),
      Container(
        decoration: BoxDecoration(
            color: Colors.yellow
        ),
      ),
    ];
    return _screensList[currentIndex];
  }


  getNavBarItems() {
    return [
      SalomonBottomBarItem(
        icon: const Icon(
          Icons.favorite,
        ),
        title: const Text(
            'Favorites',
            style: TextStyle(
                fontSize: 10
            )
        ),
      ),
      SalomonBottomBarItem(
        icon: const Icon(
          Icons.format_list_bulleted,
        ),
        title: const Text(
            'Catalog',
            style: TextStyle(
                fontSize: 10
            )
        ),
      ),
      SalomonBottomBarItem(
        icon: const Icon(
          Icons.account_circle_outlined,
        ),
        title: const Text(
            'Profile',
            style: TextStyle(
                fontSize: 10
            )
        ),
      ),
    ];
  }


  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      extendBodyBehindAppBar: true,
      extendBody: true,
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60),
        child: CustomAppBarWidget(),
      ),
      body: CatalogScreenWidget(),
    );
  }


  Widget getBottomNavBar(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(bottom: 15, right: 60, left: 60),
      child: Container(
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(30),
            color: Colors.black87
        ),
        child: SalomonBottomBar(
          currentIndex: _currentIndex,
          selectedItemColor: Colors.white,
          unselectedItemColor: Colors.grey,
          itemPadding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: getNavBarItems(),
        ),
      ),
    );
  }
}