import { createContext, useContext } from 'react';

export const THEME_MODES = ['auto', 'light', 'dark'];

export const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
};

export const ThemeModeContext = createContext({
  mode: 'auto',
  resolvedTheme: 'dark',
  cycleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);
