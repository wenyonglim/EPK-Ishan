import { Button } from '@nextui-org/react';
import { FaMoon, FaRegClock, FaSun } from 'react-icons/fa';
import { useThemeMode } from './ThemeContext.jsx';

const themeLabels = {
  auto: 'Auto theme',
  light: 'Light theme',
  dark: 'Dark theme',
};

const ThemeToggle = () => {
  const { mode, resolvedTheme, cycleMode } = useThemeMode();
  const Icon = mode === 'auto' ? FaRegClock : resolvedTheme === 'light' ? FaSun : FaMoon;

  return (
    <Button
      auto
      light
      rounded
      aria-label={`Theme mode: ${themeLabels[mode]}`}
      title={`${themeLabels[mode]} (${resolvedTheme})`}
      onPress={cycleMode}
      className='theme-toggle'
    >
      <Icon />
    </Button>
  );
};

export default ThemeToggle;
