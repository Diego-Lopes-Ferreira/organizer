import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';
import ThemeProvider, { useTheme } from './src/contexts/Theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Routes />
        <StatusBarConfig />
      </ThemeProvider>
    </NavigationContainer>
  );
}

function StatusBarConfig() {
  const { theme } = useTheme();
  return <StatusBar style={theme.statusBar} />;
}
