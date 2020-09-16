import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../../contexts/Theme';


export default function PageTree({ navigation }) {
  const { theme } = useTheme();
  const styles = theme.styles;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Screen Tree</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.buttonPrimary}
        >
          <Text style={styles.text}>Go back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
