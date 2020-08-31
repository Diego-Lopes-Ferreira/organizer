import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigators/index';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
