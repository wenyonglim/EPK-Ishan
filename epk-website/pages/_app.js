import '@/styles/globals.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

// Custom theme and pass  custom theme values
const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  },
});

// ^ Pass the new `theme`` to the `NextUIProvider`
// function MyApp({ Component, pageProps }) {
//   return (
//     <NextUIProvider theme={theme}>
//       <Component {...pageProps} />
//     </NextUIProvider>
//   )
// }
