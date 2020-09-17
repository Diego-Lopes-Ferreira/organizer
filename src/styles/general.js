import React from "react";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export { genGeneralStyle };

function genGeneralStyle(colors) {
  const general = StyleSheet.create({
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
  const drawer = StyleSheet.create({
    drawerItemView: {
      //backgroundColor: "#ff0000",
      paddingVertical: 10,
      paddingHorizontal: 30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    drawerItemText: {
      fontSize: 20,
      color: colors.gray4,
    },
    drawerItemTitle: {
      fontSize: 25,
      color: colors.gray5,
    },
    drawerAppName: {
      //backgroundColor: "#ff0000",
      paddingVertical: 10,
      paddingHorizontal: 30,
      flexDirection: "row",
      justifyContent: "center",
    },
  });
  return { general, drawer };
}
