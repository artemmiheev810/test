import React, { FC } from "react";
import { IndicatePointColors, setClassName } from "utils/setClassName";
import st from "./IndicatePoint.module.scss";
interface IndicatePointProps {
  color: IndicatePointColors;
  isWithBright?: boolean;
}

export let IndicatePoint: FC<IndicatePointProps> = ({
  isWithBright = false,
  color,
}) => {
  return <div className={setClassName(color, st, isWithBright)} />;
};
