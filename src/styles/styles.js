import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const mainBgColor = '#141414';
export const mainTxtColor = '#dbdbdb';
export const primaryColor = '#c53321';

export const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: mainBgColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: mainTxtColor,
  },
  buttonPrimary: {
    backgroundColor: primaryColor,
    borderRadius: 15,
    minHeight: 50,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});