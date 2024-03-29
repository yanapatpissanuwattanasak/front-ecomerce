import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import '@/src/styles/globals.css'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}