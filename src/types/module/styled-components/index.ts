import { Keyframes } from 'styled-components';

export type colors = {
  primary: {
    main: string;
    light: string;
    dark: string;
  };

  secondary: {
    main: string;
    light: string;
    dark: string;
  };
};

export type text = {
  primary: {
    light: string;
    dark: string;
  };

  secondary: {
    light: string;
    dark: string;
  };
};

export type light = {
  colors: colors;
  text: text;
};

export type animations = {
  fadein: Keyframes;
};
