import React from 'react';
import s from './RelatedMenu.module.scss';
import { RelatedMenuItem } from '@/src/types';
import { MenuItem } from './components/MenuItem';

interface RelatedMenuProps {
  menu: RelatedMenuItem[];
  activeItem: number;
  onClick: (id: number) => void;
}

const RelatedMenu = React.memo(
  ({ menu, activeItem, onClick }: RelatedMenuProps): JSX.Element => {
    return (
      <ul className={s.menu}>
        {menu.map(({ id, name }, index) => (
          <MenuItem
            key={id}
            index={index}
            name={name}
            isActive={activeItem === index}
            onClick={onClick}
          />
        ))}
      </ul>
    );
  },
);

export { RelatedMenu };
