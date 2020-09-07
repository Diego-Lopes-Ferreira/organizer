import React from 'react';
import { View, Text, Switch } from 'react-native';

// import { Container } from './styles';

function ThemeSwitcher({ }) {
  return (
    <View>
      <Text></Text>
      <Switch
        onValueChange={() => {
          setTheme(theme.name === 'dark' ? 'light' : 'dark')
          props.navigation.closeDrawer();
        }}
        value={theme.name === 'dark'}
      />
    </View>
  );
}

export default Drawer;