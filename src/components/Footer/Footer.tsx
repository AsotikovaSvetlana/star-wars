import React from 'react';
import s from './Footer.module.scss';
import { contacts } from './data/contacts';
import { Menu } from '../Menu';

const Footer = React.memo(() => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <p>Follow me:</p>
        <Menu menu={contacts} color="primary-yellow" iconSize="sm" type="row" />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export { Footer };
