import { Props } from '../../ts/interfaces';
import { Container, Content, PageContainer } from './Dashboardd.styled';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const DashboarLayout = ({ children }: Props.DashboardLayoutProps) => (
  <Container>
    <Header />
    <Content>
      <Sidebar />
      <PageContainer>
        <div>{children}</div>
      </PageContainer>
    </Content>
    <Footer />
  </Container>
);

export default DashboarLayout;
