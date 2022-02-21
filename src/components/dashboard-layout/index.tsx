import { Props } from './interfaces';
import { Container, Content, PageContainer } from './styled';
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';

const DashboarLayout = ({ children }: Props) => (
  <Container>
    <Header />
    <Content>
      <Sidebar />
      <PageContainer>{children}</PageContainer>
    </Content>
    <Footer />
  </Container>
);

export default DashboarLayout;
