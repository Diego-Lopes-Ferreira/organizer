import React from 'react';
import * as general from './general'
import colors from './colors';


const themesList = {
  light: {
    colors: colors.light,
    styles: general.generalLight, 
    statusBar: 'dark',
  },
  dark: {
    colors: colors.light,
    styles: general.generalDark, 
    statusBar: 'light',
  },
}

export default themesList