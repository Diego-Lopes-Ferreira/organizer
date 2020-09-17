import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../contexts/Theme';

function Header({ toggleDrawer }) {
  const { theme } = useTheme();
  const styles = theme.styles.header;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={toggleDrawer}>
        <FontAwesome name="bars" size={32} color={theme.colors.gray8} />
      </TouchableOpacity>
      <Text style={styles.title}>Hallo</Text>
    </View>
  );
}

export default Header;
