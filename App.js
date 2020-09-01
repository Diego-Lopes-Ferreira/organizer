import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigators/index';
import ThemeProvider, { useTheme } from './src/contexts/Theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainNavigator />
        <StatusBarConfig />
      </ThemeProvider>
    </NavigationContainer>
  );
}

function StatusBarConfig() {
  const { theme } = useTheme();
  return <StatusBar style={theme.statusBar} />
}