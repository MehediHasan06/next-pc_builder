import RootLayout from '@/components/layouts/RootLayout';
import { Button } from 'antd';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';


const Home: NextPageWithLayout = () => {
  return (
    <main>
      <h1>Hello Next!!!</h1>
      <Button type="primary">Primary Button</Button>
    </main>
  )
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}