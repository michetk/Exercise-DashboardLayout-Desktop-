import { DefaultTheme, keyframes } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    main: '#00022e',
    secondary: '#fc86aa',
    textDark: '#000133',
    textLight: '#fff',
    greyBg: '#d8dcd6',
  },

  // aniamation: {
  //   fadein: {
  //     from: { opacity: 0 },
  //     to: { opacity: 1 },
  //   },
  // },

  aniamation: {
    fadein: keyframes`
      from {opacity: 0}
      to {opacity: 1}
    `,
  },
}
