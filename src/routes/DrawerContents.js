import React from 'react';
import { View, Text, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../contexts/Theme';

const screensInfo = [
  {
    name: 'One',
    label: 'The Label',
    icon: 'home',
  },
  {
    name: 'Two',
    label: 'The Label 2',
    icon: 'coffee',
  },
  {
    name: 'Tree',
    label: 'The Label 3',
    icon: 'gift',
  },
];

function DrawerContents(props) {
  const { theme, setTheme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>App Title</Text>
        </View>
        {screensInfo.map((item) => (
          <DrawerItem
            icon={({ color, size }) => <FontAwesome name={item.icon} color={color} size={size} />}
            label={item.label}
            onPress={() => props.navigation.jumpTo(item.name)}
            key={screensInfo.indexOf(item)}
          />
        ))}
      </DrawerContentScrollView>
      <View>
        <Switch
          onValueChange={() => {
            setTheme(theme.name === 'dark' ? 'light' : 'dark');
            props.navigation.closeDrawer();
          }}
          value={theme.name === 'dark'}
        />
      </View>
      <View>
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome name="sign-out" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => global.console.log('youSignedOut')}
        />
      </View>
    </View>
  );
}

export default DrawerContents;
