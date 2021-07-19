import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { ResetCSS } from 'styles/global';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const localTheme = pageProps?.theme || theme;

  return (
    <>
      <ResetCSS />
      <ThemeProvider theme={localTheme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
