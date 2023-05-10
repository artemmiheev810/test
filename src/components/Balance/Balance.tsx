import { PlusIcon } from "components/Icons/PlusIcon";
import React from "react";

import st from "./Balance.module.scss";
export const Balance = ({ balance }: { balance: number }) => {
  return (
    <div className={st.wrap}>
      <span>{"Баланс: "}</span> <span>{balance} ₽</span>
      <PlusIcon className={st.plus} />
    </div>
  );
};
