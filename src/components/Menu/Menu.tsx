import React from "react";
import cn from "classnames";
import { IMenuItem } from "@/src/types";
import { MenuItem } from "./components/MenuItem";
import s from "./Menu.module.scss";

interface MenuProps {
  menu: IMenuItem[];
  color: "primary-yellow";
  iconSize: "sm";
  type: "row" | "column";
}

export const Menu = ({
  menu,
  color,
  iconSize,
  type,
}: MenuProps): JSX.Element => {
  return (
    <ul className={cn(s.menu, s[color], s[type])}>
      {menu.map(({ id, name, href, icon }) => (
        <MenuItem
          key={id}
          id={id}
          name={name}
          icon={icon}
          href={href}
          iconSize={iconSize}
        />
      ))}
    </ul>
  );
};
