import React from 'react';
import { View, Text, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../contexts/Theme';

const screensInfo = [
  {
    name: 'Home',
    label: 'Home',
    icon: 'coffee',
  },
  {
    name: 'One',
    label: 'The Label',
    icon: 'home',
  },
];

function DrawerContents(props) {
  const { theme, setTheme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={theme.styles.drawer.drawerAppName}>
          <Text style={theme.styles.drawer.drawerItemTitle}>App Title</Text>
        </View>
        {screensInfo.map((item) => (
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name={item.icon} color={color} size={size} />
            )}
            label={item.label}
            onPress={() => props.navigation.jumpTo(item.name)}
            key={screensInfo.indexOf(item)}
          />
        ))}
      </DrawerContentScrollView>
      <ThemeSwitcherItem
        theme={theme}
        setTheme={setTheme}
        close={props.navigation.closeDrawer}
      />
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

function ThemeSwitcherItem({ theme, setTheme, close }) {
  return (
    <View style={theme.styles.drawer.drawerItemView}>
      <Text style={theme.styles.drawer.drawerItemText}>Dark Mode</Text>
      <Switch
        //background
        trackColor={{ false: theme.colors.gray1, true: theme.colors.gray1 }}
        //ball
        thumbColor={
          theme.name === 'dark' ? theme.colors.primary2 : theme.colors.primary2
        }
        //idk
        ios_backgroundColor={theme.colors.gray1}
        onValueChange={() => {
          setTheme(theme.name === 'dark' ? 'light' : 'dark');
          close(); //props.navigation.closeDrawer();
        }}
        value={theme.name === 'dark'}
      />
    </View>
  );
}

export default DrawerContents;
