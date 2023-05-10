import { concatClass } from "utils/concatClass";

export type IndicatePointColors = "red" | "grey" | "green" | "yellow" | string;

const colors = (st: { [key in IndicatePointColors]: string }): Record<
  IndicatePointColors,
  { className: string; withBrightClass: string }
> => ({
  yellow: {
    className: st.yellow,
    withBrightClass: st.yellow__bright,
  },
  grey: { className: st.grey, withBrightClass: "" },
  red: { className: st.red, withBrightClass: "" },
  green: { className: st.green, withBrightClass: "" },
});
export const setClassName = (
  color: IndicatePointColors,
  styleObj: { [key in IndicatePointColors]: string },
  isWithBright?: boolean
) => {
  return isWithBright
    ? concatClass(
        colors(styleObj)[color].className,
        colors(styleObj)[color].withBrightClass
      )
    : colors(styleObj)[color].className;
};
