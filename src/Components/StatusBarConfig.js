import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from './src/contexts/Theme';

const StatusBarConfig = () => {
  const { theme } = useTheme();
  return <StatusBar style={theme.statusBar} />;
};

export default StatusBarConfig;
