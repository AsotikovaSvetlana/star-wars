import React from 'react';
import cn from 'classnames';
import s from './MenuItem.module.scss';

interface MenuItemProps {
  name: string;
  index: number;
  isActive: boolean;
  onClick: (id: number) => void;
}

const MenuItem = React.memo(
  ({ index, name, isActive, onClick }: MenuItemProps): JSX.Element => (
    <li
      className={cn(s.item, {
        [s.active]: isActive,
      })}
      onClick={() => onClick(index)}
    >
      {name}
    </li>
  ),
);

export { MenuItem };
