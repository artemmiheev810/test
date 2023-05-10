import { Popover } from "antd";
import { UserInfoContent } from "components/UserInfoPopup/UserInfoContent";
import React, { useState } from "react";
import { Arrow } from "components/Icons/Arrow";

import avatar from "static/img/avatar.png";
import st from "./UserInfoPopup.module.scss";

export const UserInfoPopup = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover
      placement="bottom"
      content={UserInfoContent}
      arrow={false}
      trigger="click"
      className={st.popover}
      onOpenChange={() => setOpen(!open)}
      overlayClassName={st.overlay}
    >
      <div className={st.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={open ? st.arrowUp : st.arrowDown}>
        <Arrow />
      </div>
    </Popover>
  );
};
