import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import DashboardLayout from '../components/DashboardLayout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  </ThemeProvider>
)

export default MyApp
