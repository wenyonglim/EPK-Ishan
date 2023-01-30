import '@/styles/globals.css';
import { createTheme, NextUIProvider, Text } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={myDarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

// Custom theme and pass  custom theme values
const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      // you can also create your own color
      myDarkColor: '#ff4ecd',
      // ...  more colors
      link: '#B583E7',
    },
    space: {},
    fonts: {},
  },
});
