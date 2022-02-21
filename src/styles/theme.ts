import { DefaultTheme } from 'styled-components';
import { FADEIN } from '@/constants/animations';

export const theme: DefaultTheme = {
  light: {
    colors: {
      primary: {
        main: '#283593',
        light: '#5f5fc4',
        dark: '#001064',
      },
      secondary: {
        main: '#512da8',
        light: '#8559da',
        dark: '#140078',
      },
    },
    text: {
      primary: {
        light: '#fff',
        dark: '#212121',
      },
      secondary: {
        light: '#5f5fc4',
        dark: '#140078',
      },
    },
  },

  aniamation: {
    fadein: FADEIN,
  },
};
