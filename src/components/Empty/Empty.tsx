import React from "react";
import AntEmpty from "antd/lib/empty";

import st from "./Empty.module.scss";
export const Empty = () => {
  return <AntEmpty description={"Данных пока нет"} className={st.fullPage} />;
};
