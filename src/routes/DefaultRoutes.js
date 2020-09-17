import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContents from './DrawerContents';

import PageOne from '../Pages/PageOne';
import Home from '../Pages/Home';

const Drawer = createDrawerNavigator();

function DefaultRoutes() {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      initialRouteName="one"
      statusBarAnimation="slide"
      drawerContent={(props) => <DrawerContents {...props} />}
      DefaultRoutes="home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="One" component={PageOne} />
    </Drawer.Navigator>
  );
}
export default DefaultRoutes;
