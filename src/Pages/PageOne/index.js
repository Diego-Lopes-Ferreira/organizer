import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../styles/styles';

export default function PageOne({ navigation }) {
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
