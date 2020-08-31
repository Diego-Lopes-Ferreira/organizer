import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function PageOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
      <TouchableOpacity onPress={() => navigation.navigate('other')}>
        <Text>Go to other page</Text>
      </TouchableOpacity>
    </View>
  )
}
