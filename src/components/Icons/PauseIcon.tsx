import React from "react";
import st from "./Styles.module.scss";

export const PauseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={st.PauseIcon}
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <rect x="14" y="7" width="3" height="10" rx="0.5" fill="#002CFB" />
      <rect x="7" y="7" width="3" height="10" rx="0.5" fill="#002CFB" />
    </svg>
  );
};
