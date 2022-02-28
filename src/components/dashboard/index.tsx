import { DashboarLayoutProps } from './interfaces';
import { DashboardContainer, DashboardContent, DashboardPage } from './styled';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';

const Dashboard = ({ children }: DashboarLayoutProps) => (
  <DashboardContainer>
    <Header />
    <DashboardContent>
      <Sidebar />
      <DashboardPage>{children}</DashboardPage>
    </DashboardContent>
    <Footer />
  </DashboardContainer>
);

export default Dashboard;
