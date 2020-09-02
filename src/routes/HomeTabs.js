import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../contexts/Theme';

import PageOne from '../Pages/PageOne/index';
import PageTree from '../Pages/PageTree/index';


const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      backBehavior='initialRoute'
      tabBar={personalizedTabBar}
    >
      <Tab.Screen name="pageOne" component={PageOne} />
      <Tab.Screen name="tabtwo" component={PageTree} />
    </Tab.Navigator>
  );
}
 
function personalizedTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { theme } = useTheme();
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ?
            options.tabBarLabel : options.title !== undefined ?
              options.title : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // Config your tabs here
        let iconName = 'home';
        if (label === 'tabtwo') {
          iconName = 'search';
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.8}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                backgroundColor: theme.colors.mainBgColor,
              }
            }
          >
            <FontAwesome
              name={iconName}
              size={24}
              color={isFocused ? theme.colors.mainTxtColor : theme.colors.mainTxtColor + '77'} />
            <Text style={{ color: isFocused ? theme.colors.mainTxtColor : theme.colors.mainTxtColor + '77' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
