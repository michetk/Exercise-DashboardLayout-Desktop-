import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/themes/theme';
import Dashboard from '@/components/dashboard';
import ToggleIconHeaderProvider from '@/contexts/toggle-icon-header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ToggleIconHeaderProvider>
    <ThemeProvider theme={theme.light}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </ThemeProvider>
  </ToggleIconHeaderProvider>
);

export default MyApp;
