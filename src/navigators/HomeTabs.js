import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PageOne from '../Pages/PageOne/index';
import PageTree from '../Pages/PageTree/index';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      backBehavior='initialRoute'
    >
      <Tab.Screen name="pageOne" component={PageOne} />
      <Tab.Screen name="tabtwo" component={PageTree} />
    </Tab.Navigator>
  );
}
