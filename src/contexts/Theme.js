import React, { createContext, useState, useContext, useEffect } from 'react';
import { readThemeAsync, saveThemeAsync } from '../api/ThemeApi';
import themesList from '../styles/styles';

const ThemeContext = createContext();

function selectTheme(themeType) {
  if (themeType) {
    switch (themeType) {
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

  useEffect(() => {
    async function fetchTheme() {
      const userTheme = await readThemeAsync();
      if (userTheme != theme) {
        setTheme(userTheme);
      }
    }
    fetchTheme();
  }, []);

  function setTheme(theme) {
    setStateTheme(selectTheme(theme));
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
  if (!context)
    throw new Error(
      'Organizer: useTheme must be used within a ThemeProvider\n/src/contexts/Theme.js'
    );
  const { theme, setTheme } = context;
  return { theme, setTheme };
}
