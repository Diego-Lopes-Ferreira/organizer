import React from "react";
import { genGeneralStyle } from "./general";
import colors from "./colors";

const themesList = {
  light: {
    name: "light",
    colors: colors.light,
    styles: genGeneralStyle(colors.light),
    statusBar: "dark",
  },
  dark: {
    name: "dark",
    colors: colors.dark,
    styles: genGeneralStyle(colors.dark),
    statusBar: "light",
  },
};

export default themesList;
