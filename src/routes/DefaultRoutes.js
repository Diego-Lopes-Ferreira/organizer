import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContents from './DrawerContents';

import PageOne from '../Pages/PageOne';
import PageTwo from '../Pages/PageTwo';
import PageTree from '../Pages/PageTree';

const Drawer = createDrawerNavigator();

function DefaultRoutes() {
  return (
    <Drawer.Navigator
      backBehavior='initialRoute'
      initialRouteName='one'
      statusBarAnimation="slide"
      drawerContent={props => <DrawerContents {...props} />}
    >
      <Drawer.Screen name="One" component={PageOne} />
      <Drawer.Screen name="Two" component={PageTwo} />
      <Drawer.Screen name="Tree" component={PageTree} />
    </Drawer.Navigator>
  );
}
export default DefaultRoutes;
