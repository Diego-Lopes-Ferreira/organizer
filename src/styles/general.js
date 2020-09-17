import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export { genGeneralStyle };

function genGeneralStyle(colors) {
  const theStyle = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      paddingHorizontal: 10,
      flex: 1,
      backgroundColor: colors.mainBgColor,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    scrollArea: {
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: colors.mainTxtColor,
    },
    buttonPrimary: {
      backgroundColor: colors.primaryColor,
      borderRadius: 15,
      minHeight: 50,
      minWidth: 200,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
    },
  });
  return theStyle;
}
