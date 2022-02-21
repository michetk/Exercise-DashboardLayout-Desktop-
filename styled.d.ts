import { light, animations } from '@/types/module/styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: light;
    aniamation: animations;
  }
}
