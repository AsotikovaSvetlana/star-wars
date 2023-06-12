import React from 'react';
import s from './Header.module.scss';
import Logo from '@/src/assets/icons/logo.svg';
import { LinkComponent } from '@/src/components/LinkComponent';

const Header = React.memo(() => {
  return (
    <header className={s.header}>
      <div className={s.header__content}>
        <div className={s.header__logo}>
          <LinkComponent href="/">
            <Logo />
          </LinkComponent>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export { Header };
