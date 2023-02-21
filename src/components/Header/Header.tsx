import React from "react";
import s from "./Header.module.scss";
import Logo from "@/src/assets/icons/logo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <div className={s.header__logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
};
