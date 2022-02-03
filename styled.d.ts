import { Keyframes } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      textDark: string
      textLight: string
      greyBg: string
    }

    // aniamation: {
    //   fadein: {
    //     from: { opacity: number }
    //     to: { opacity: number }
    //   }
    // }

    aniamation: {
      fadein: Keyframes
    }
  }
}
