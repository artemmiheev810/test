import React, { FC } from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import { Arrow } from "components/Icons/Arrow";
import { concatClass } from "utils/concatClass";
import st from "./Select.module.scss";

interface SelectProps extends AntSelectProps {
  isWide?: boolean;
  isValueIlluminated?: boolean;
}
export const Select: FC<SelectProps> = ({
  isWide = false,
  isValueIlluminated = false,
  ...props
}) => {
  return (
    <AntSelect
      {...props}
      placement={"bottomRight"}
      className={
        isValueIlluminated && props.value !== "undefined"
          ? concatClass(st.inputPart, st.inputPart__illuminated)
          : st.inputPart
      }
      popupClassName={
        isWide ? st.popupPart : concatClass(st.popupPart, st.popupPart__noWide)
      }
      bordered={false}
      suffixIcon={<Arrow />}
    />
  );
};
