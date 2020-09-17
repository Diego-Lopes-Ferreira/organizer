import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../../contexts/Theme';

import Header from '../../Components/Header';

export default function Home({ navigation }) {
  const { theme } = useTheme();
  const styles = theme.styles.general;
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={styles.buttonPrimary}
      >
        <Text style={styles.text}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}
