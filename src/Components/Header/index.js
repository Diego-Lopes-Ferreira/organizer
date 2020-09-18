import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../contexts/Theme';

function Header({ toggleDrawer }) {
  const { theme } = useTheme();
  const styles = theme.styles.header;

  const [isOnline, setOnline] = useState(false);
  function setOnlineStatus() {
    /* check internet connection
      if (true) {
        setOnline(true);
      } else {
        setOnline(false);
      }
    */

    setOnline(!isOnline);
  }
  useEffect(() => {
    setOnlineStatus();
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          toggleDrawer();
          setOnlineStatus();
        }}
      >
        <FontAwesome name="bars" size={32} color={theme.colors.gray8} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Title</Text>
      </View>
      <View>
        <Text
          style={{
            color: isOnline ? theme.colors.primary2 : theme.colors.red,
          }}
        >
          {isOnline ? 'Online' : 'Offline'}
        </Text>
      </View>
    </View>
  );
}

export default Header;
