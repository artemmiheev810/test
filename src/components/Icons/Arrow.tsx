import { IconProps } from "components/Icons/type";
import React from "react";

export const Arrow = ({ className, onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15_10207)">
        <path
          opacity="0.8"
          d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_10207">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
