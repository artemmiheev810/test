import { IndicatePoint } from "components/IndicatePoint/IndicatePoint";
import { RoutesLink } from "config/routes/routes";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import style from "./SideBar.module.scss";

interface SideBarLinkProps extends RoutesLink {
  isHasNotification?: boolean;
}

export const SideBarLink: FC<SideBarLinkProps> = ({
  icon: Icon,
  title,
  link,
  isHasNotification,
}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? style.link__active : style.link)}
    >
      <div className={style.link__wrap}>
        <div className={style.link__icon}>
          <Icon />
        </div>
        <span>{title}</span>
      </div>

      {isHasNotification && <IndicatePoint color={"yellow"} isWithBright />}
    </NavLink>
  );
};
