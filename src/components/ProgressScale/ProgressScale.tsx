import { Progress, ProgressProps } from "antd";
import React, { FC } from "react";
import { setClassName } from "utils/setClassName";

import st from "./ProgressScale.module.scss";
interface ProgressScaleProps extends ProgressProps {
  label: string;
  value: string;
}

export const ProgressScale: FC<ProgressScaleProps> = ({
  label,
  percent,
  value,
  ...props
}) => {
  const color = (p: number = 0) => {
    if (p <= 34 && p > 1) {
      return { name: "green", color: "#28A879" };
    } else if (p <= 66) {
      return { name: "yellow", color: "#FFD500" };
    } else {
      return { name: "red", color: "#EA1A4F" };
    }
  };
  return (
    <div>
      <div className={st.text}>
        {label}{" "}
        <span className={setClassName(color(percent).name, st)}>{value}</span>
      </div>
      <Progress
        className={st.normalize}
        showInfo={false}
        percent={percent}
        strokeColor={color(percent).color}
        trailColor={"#DEE6F5"}
        {...props}
      />
    </div>
  );
};
