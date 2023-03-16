import React from "react";
import s from "./MainLayout.module.scss";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = React.memo(({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.wrapper__main}>{children}</main>
      <Footer />
    </div>
  );
});

export { MainLayout };
