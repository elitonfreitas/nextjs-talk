const breakpoints: any = ['40em', '52em', '64em', '75em'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
  colors: {
    brand: {
      primary: {
        darkest: '#480070',
        dark: '#5C068C',
        regular: '#5d1499',
        light: '#A44DD6',
        lightest: '#D68FFF',
      },
      secondary: {
        darkest: '#E6A200',
        dark: '#FFBA13',
        regular: '#FDCA4C',
        light: '#FDD87F',
        lightest: '#FDDF98',
      },
      highlight: {
        darkest: '#CC006E',
        dark: '#E6007B',
        regular: '#FF1493',
        light: '#FF66B9',
        lightest: '#FF99D0',
      },
    },
    text: {
      darkest: '#00000090',
      dark: '#00000080',
      regular: '#00000065',
      light: '#00000060',
      lightest: '#00000038',
    },
    functional: {
      positive: '#1E824C',
      negative: '#B00020',
      link: '#7319A6',
    },
    primary: {
      500: '#5d1499',
    },
    secondary: {
      500: '#FDCA4C',
    },
  },
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
