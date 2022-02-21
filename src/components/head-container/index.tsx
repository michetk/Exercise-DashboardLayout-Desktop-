import Head from 'next/head';
import { Props } from './interfaces';

const HeadContainer = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Dashboard Project" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    {children}
  </>
);

export default HeadContainer;
