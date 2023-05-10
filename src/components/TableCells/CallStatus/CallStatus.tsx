import { CallTypeIcon } from "components/Icons/CallTypeIcon";
import React from "react";

import st from "./Style.module.scss";

interface CallStatusProps {
  status: string;
  type: string;
}
const Elements = {
  successIn: <CallTypeIcon.In />,
  successOut: <CallTypeIcon.Out />,
  failIn: <CallTypeIcon.MissedIn />,
  failOut: <CallTypeIcon.MissedOut />,
};

const getStatus = ({ status, type }: CallStatusProps) => {
  if (status === "Дозвонился" && type === "1") {
    return "successIn";
  }
  if (status === "Дозвонился" && type === "0") {
    return "successOut";
  }
  if (status === "Не дозвонился" && type === "1") {
    return "failIn";
  }
  if (status === "Не дозвонился" && type === "0") {
    return "failOut";
  }
  return;
};

export const CallStatus = ({ status, type }: CallStatusProps) => {
  const name = getStatus({ status, type });
  return name ? (
    <div>{Elements[name]}</div>
  ) : (
    <div className={st.text}>Тип не определен</div>
  );
};
