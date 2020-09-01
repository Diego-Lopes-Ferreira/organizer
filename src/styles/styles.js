import {light, dark} from './general'
import { color } from 'react-native-reanimated';

const mainBgColor = '#141414';
const mainTxtColor = '#dbdbdb';
const primaryColor = '#c53321';

const colors = {
  light: {},
  dark: {}
}


const themesList = {
  light: {
    colors: colors.light,
    statusBar: 'dark'
  },
  dark: {
    colors: colors.light,
    statusBar: 'light',
  },
}

export default themesList