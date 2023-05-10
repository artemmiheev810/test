import React from "react";
import st from "./Styles.module.scss";

export const DownloadIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={st.DownloadIcon}
    >
      <path
        d="M6 20H19V18.1176H6V20ZM19 9.64706H15.2857V4H9.71429V9.64706H6L12.5 16.2353L19 9.64706Z"
        fill="#ADBFDF"
      />
    </svg>
  );
};
