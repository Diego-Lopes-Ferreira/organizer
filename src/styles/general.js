import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export { genGeneralStyle };

function genGeneralStyle(colors) {
  const general = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      paddingHorizontal: 10,
      flex: 1,
      backgroundColor: colors.gray1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    scrollArea: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.gray6,
    },
    buttonPrimary: {
      backgroundColor: colors.green1,
      borderRadius: 15,
      minHeight: 50,
      minWidth: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
  });
  const header = StyleSheet.create({
    container: {
      //backgroundColor: '#ff0000',
      width: '100%',
      //height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleWrapper: {
      //marginRight: 32,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      color: colors.gray6,
    },
  });
  const drawer = StyleSheet.create({
    drawerItemView: {
      //backgroundColor: '#ff0000',
      paddingVertical: 10,
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    drawerItemText: {
      fontSize: 20,
      color: colors.gray5,
    },
    drawerItemTitle: {
      fontSize: 25,
      color: colors.gray5,
    },
    drawerAppName: {
      //backgroundColor: '#ff0000',
      paddingVertical: 10,
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  return { general, header, drawer };
}
