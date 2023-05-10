import React, { useEffect, useState } from "react";
import { concatClass } from "utils/concatClass";

import st from "./CheckBox.module.scss";

interface CheckBoxProps {
  isCheck: boolean;
  onChange?: (arg: boolean) => void;
  visibilityClassNames?: [string, string];
  index: string;
}
export const CheckBox = ({
  isCheck,
  visibilityClassNames,
  onChange,
  index,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState<boolean>(isCheck);
  useEffect(() => {
    setChecked(isCheck);
  }, [isCheck]);
  const onInnerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    onChange?.(event.currentTarget.checked);
  };
  return (
    <>
      <input
        id={index}
        name={index}
        checked={checked}
        onChange={(e) => onInnerChange(e)}
        type="checkbox"
        className={st.checkbox}
      />
      <label
        className={concatClass(
          checked
            ? concatClass(...(visibilityClassNames ?? []))
            : visibilityClassNames?.[0] ?? ""
        )}
        htmlFor={index}
      ></label>
    </>
  );
};
