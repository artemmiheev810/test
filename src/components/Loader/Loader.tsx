import { Spin } from "antd";
import React from "react";

import st from "./Loader.module.scss";
export const Loader = () => {
  return <Spin className={st.fullPage} />;
};
