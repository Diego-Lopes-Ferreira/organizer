import React, { createContext, useState, useContext, useEffect } from "react";
import { readThemeAsync, saveThemeAsync } from '../api/ThemeApi';
import themesList from '../styles/styles';


const ThemeContext = createContext();


function selectTheme(themeType) {
  if(themeType) {
    switch(themeType) {
      case 'dark':
        return themesList.dark;
      case 'light':
        return themesList.light;
      default:
        return themesList.dark;
    }
  }
  return themesList.dark;
}

export default function ThemeProvider({ children }) {
  const [theme, setStateTheme] = useState(selectTheme());

  useEffect(async () => {
    const userTheme = await readThemeAsync();
    if (userTheme != theme) {  
      setTheme(selectTheme(userTheme));
    }
  }, [])

  function setTheme(theme) {
    setStateTheme(theme);
    saveThemeAsync(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
