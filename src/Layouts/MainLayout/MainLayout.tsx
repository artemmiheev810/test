import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import React, { FC, ReactNode } from "react";

import style from "./MainLayout.module.scss";
interface MainLayoutProps {
  children: ReactNode | ReactNode[];
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <SideBar />
      <Header />
      <div className={style.content}>{children}</div>
    </div>
  );
};
