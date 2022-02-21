import type { NextPage } from 'next';
import HeadContainer from '../components/head-container';
import { Container } from './_styled';

const Home: NextPage = () => (
  <HeadContainer title="Dashboard">
    <Container>
      <h1>Home</h1>
      <h2>SUB</h2>
    </Container>
  </HeadContainer>
);

export default Home;
