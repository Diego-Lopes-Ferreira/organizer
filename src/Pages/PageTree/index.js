import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function PageTree({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen Tree</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}
