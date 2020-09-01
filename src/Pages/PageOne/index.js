import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../../contexts/Theme';

export default function PageOne({ navigation }) {
  const { theme } = useTheme();
  const styles = theme.styles;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Screen One</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('other')}
          style={styles.buttonPrimary}
        >
          <Text style={styles.text}>Go to other page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
