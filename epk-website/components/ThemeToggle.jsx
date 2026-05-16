import { Button } from '@nextui-org/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useThemeMode } from './ThemeContext.jsx';

const themeLabels = {
  auto: 'Auto theme',
  light: 'Light theme',
  dark: 'Dark theme',
};

const ThemeToggle = () => {
  const { mode, resolvedTheme, cycleMode } = useThemeMode();
  const Icon = resolvedTheme === 'light' ? FaSun : FaMoon;
  const nextTheme = resolvedTheme === 'light' ? 'Dark theme' : 'Light theme';

  return (
    <Button
      auto
      light
      rounded
      aria-label={`Switch to ${nextTheme}`}
      title={`${themeLabels[mode]} (${resolvedTheme}). Click for ${nextTheme}`}
      onPress={cycleMode}
      className='theme-toggle'
    >
      <Icon />
    </Button>
  );
};

export default ThemeToggle;
