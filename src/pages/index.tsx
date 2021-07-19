import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Header from 'components/groups/Header';
import theme from 'styles/theme';

export const getServerSideProps: GetServerSideProps = async (context): Promise<any> => {
  const wl = context.query.wl;
  const customTheme = JSON.parse(JSON.stringify(theme));

  if (wl) {
    customTheme.colors.brand.primary.regular = '#d7a606';
  }

  return {
    props: {
      theme: customTheme,
    },
  };
};

export const Home: FC = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
