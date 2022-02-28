import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/themes/theme';
import DashboardLayout from '../components/dashboard-layout';
import ToggleIconProvider from '../contexts/toggle-context';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ToggleIconProvider>
    <ThemeProvider theme={theme.light}>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  </ToggleIconProvider>
);

export default MyApp;
