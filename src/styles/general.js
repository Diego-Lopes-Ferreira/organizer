import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import colors from './colors';

export {
  generalLight,
  generalDark,
}

const generalDark = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: colors.dark.mainBgColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.dark.mainTxtColor,
  },
  buttonPrimary: {
    backgroundColor: colors.dark.primaryColor,
    borderRadius: 15,
    minHeight: 50,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
const generalLight = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: colors.light.mainBgColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.light.mainTxtColor,
  },
  buttonPrimary: {
    backgroundColor: colors.light.primaryColor,
    borderRadius: 15,
    minHeight: 50,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});