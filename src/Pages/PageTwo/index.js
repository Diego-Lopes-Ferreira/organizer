import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';

export default function PageTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}
