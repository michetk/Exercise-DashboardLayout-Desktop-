import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import DashboardLayout from '../components/DashboardLayout';
import ToggleIconProvider from '../contexts/toggleIcon';
import ToggleSideBarItemProvider from '../contexts/toggleSideBarIcon';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ToggleIconProvider>
    <ToggleSideBarItemProvider>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeProvider>
    </ToggleSideBarItemProvider>
  </ToggleIconProvider>
);

export default MyApp;
