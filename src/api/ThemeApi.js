import { AsyncStorage } from "react-native";

import { appName, defaultTheme } from '../config.json';

const appThemeKey = `${appName}_user_theme`;

async function saveThemeAsync(theme) {
  try {
    await AsyncStorage.setItem(appThemeKey, theme);
    return theme;
  } catch (err) {
    console.error(err);
    return err;
  }
}

async function readThemeAsync() {
  try {
    const theme = await AsyncStorage.getItem(appThemeKey);
    return theme;
  } catch (err) {
    //console.error(err);
    const theme = defaultTheme;
    return theme;
  }
}

async function resetThemeAsync() {
  try {
    await AsyncStorage.setItem(appThemeKey, defaultTheme);
    return theme;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export { saveThemeAsync, readThemeAsync, resetThemeAsync }