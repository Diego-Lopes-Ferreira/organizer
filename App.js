import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes';
import StatusBarConfig from './src/Components/StatusBarConfig';
import ThemeProvider from './src/contexts/Theme';

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
