import { Input, InputProps } from "antd";
import React, { FC, useState } from "react";
import { CloseIcon } from "components/Icons/CloseIcon";
import { SearchIcon } from "components/Icons/SearchIcon";

import st from "./InputSearch.module.scss";

interface InputSearchProps extends InputProps {
  label?: string;
}
export const InputSearch: FC<InputSearchProps> = ({ label, ...props }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={st.wrap}>
      <div className={st.label}>{label}</div>

      <div className={visible ? st.wrap_content : st.wrap_noContent}>
        <SearchIcon onClick={() => !visible && setVisible(true)} />
        <div className={visible ? st.visible : st.noVisible}>
          <Input {...props} rootClassName={st.input} />
          <CloseIcon onClick={() => setVisible(false)} />
        </div>
      </div>
    </div>
  );
};
