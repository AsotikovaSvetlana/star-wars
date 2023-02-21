import React from "react";
import cn from "classnames";
import { IMenuItem } from "@/src/types";
import s from "./MenuItem.module.scss";

interface MenuItemProps extends IMenuItem {
  iconSize: "sm";
}

export const MenuItem = ({
  name,
  href,
  icon,
  iconSize,
}: MenuItemProps): JSX.Element => {
  return (
    <li className={s.item}>
      <a href={href} rel="noreferrer" target="_blank">
        <span className={s.item__name}>{name}</span>
        {icon && <span className={cn(s.item__icon, s[iconSize])}>{icon}</span>}
      </a>
    </li>
  );
};
