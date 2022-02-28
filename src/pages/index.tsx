import type { NextPage } from 'next';
import HeadContainer from '../components/head-container';
import { Container } from './_styled';

const Home: NextPage = () => (
  <HeadContainer title="Dashboard">
    <Container>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <h2>SUB</h2>
      </div>
    </Container>
  </HeadContainer>
);

export default Home;
