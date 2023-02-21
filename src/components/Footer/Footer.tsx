import React from "react";
import s from "./Footer.module.scss";
import { contacts } from "./data/contacts";
import { Menu } from "../Menu";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <p>Follow me:</p>
        <Menu menu={contacts} color="primary-yellow" iconSize="sm" type="row" />
      </div>
    </footer>
  );
};
