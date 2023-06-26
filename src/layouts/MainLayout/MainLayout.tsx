import React from 'react';
import s from './MainLayout.module.scss';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import Skeleton from '@/src/components/Skeleton/Skeleton';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <div className={s.wrapper}>
    <Header />
    <main className={s.wrapper__main}>
      <Skeleton>{children}</Skeleton>
    </main>
    <Footer />
  </div>
);

export default React.memo(MainLayout);
