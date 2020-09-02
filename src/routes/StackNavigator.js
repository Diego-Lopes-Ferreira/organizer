import React from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';

//import HomeTabs from './HomeTabs'
import PageTwo from '../Pages/PageTwo';
import PageOne from '../Pages/PageOne';
import PageTree from '../Pages/PageTree';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
    }}>
      {/* <Stack.Screen name='home' component={HomeTabs} /> */}
      <Stack.Screen name='other' component={PageTwo} />
    </Stack.Navigator>
  );
}
