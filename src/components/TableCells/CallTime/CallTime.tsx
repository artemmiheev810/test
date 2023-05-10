import React from "react";

import st from "components/TableCells/CallTime/st.module.scss";

export const CallTime = ({ value }: { value: string }) => {
  return <div className={st.CallTime}>{value}</div>;
};
