import * as nextImage from 'next/image';
import { ThemeProvider } from '@emotion/react'
import theme from 'styles/theme';
import { ResetCSS } from 'styles/global';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <ResetCSS />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  )
]
