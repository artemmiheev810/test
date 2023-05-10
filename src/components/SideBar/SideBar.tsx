import { SideBarLink } from "components/SideBar/SideBarLink";
import { RoutesLinks } from "config/routes/routes";
import React from "react";
import logo from "static/img/logo.svg";
import styles from "./SideBar.module.scss";

export const SideBar = () => {
  /**  не понял что за желтая точка
   если это индикатор нового необработанного действия, или типа того,
   можно в каком-то абстрактном хранилище держать данные и смотреть есть ли подходящий тип
   */
  const storage: any = {
    calls: {},
    localLib: {},
  };
  return (
    <div className={styles.content}>
      <img src={logo} alt="logo" />
      {RoutesLinks.map(({ name, ...props }, index) => (
        <SideBarLink
          isHasNotification={
            name && storage.hasOwnProperty(name) && !!storage[name]
          }
          key={index}
          {...props}
        />
      ))}
    </div>
  );
};
