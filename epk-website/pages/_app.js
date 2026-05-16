import '@/styles/globals.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import {
  getTimeBasedTheme,
  THEME_MODES,
  ThemeModeContext,
} from '@/components/ThemeContext.jsx';

const STORAGE_KEY = 'epk-theme-mode';

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState('auto');
  const [autoTheme, setAutoTheme] = useState('dark');

  useEffect(() => {
    const savedMode = window.localStorage.getItem(STORAGE_KEY);

    if (THEME_MODES.includes(savedMode)) {
      setMode(savedMode);
    }

    setAutoTheme(getTimeBasedTheme());
  }, []);

  useEffect(() => {
    if (mode !== 'auto') {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setAutoTheme(getTimeBasedTheme());
    }, 60 * 1000);

    return () => window.clearInterval(interval);
  }, [mode]);

  const resolvedTheme = mode === 'auto' ? autoTheme : mode;
  const theme = resolvedTheme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    document.documentElement.dataset.themeMode = resolvedTheme;
  }, [resolvedTheme]);

  const themeModeValue = useMemo(
    () => ({
      mode,
      resolvedTheme,
      cycleMode: () => {
        const nextMode = resolvedTheme === 'light' ? 'dark' : 'light';

        window.localStorage.setItem(STORAGE_KEY, nextMode);
        setMode(nextMode);
      },
    }),
    [mode, resolvedTheme]
  );

  return (
    <NextUIProvider theme={theme}>
      <ThemeModeContext.Provider value={themeModeValue}>
        <Component {...pageProps} />
      </ThemeModeContext.Provider>
    </NextUIProvider>
  );
}

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      myDarkColor: '#ff4ecd',
      link: '#B583E7',
    },
    space: {},
    fonts: {},
  },
});

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#f7f2ec',
      text: '#201a1f',
      myDarkColor: '#c02fbf',
      link: '#7f3fc5',
    },
    space: {},
    fonts: {},
  },
});
