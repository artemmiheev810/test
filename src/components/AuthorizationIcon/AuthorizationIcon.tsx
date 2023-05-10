const LogIn = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15_11565)">
        <path
          d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
          fill="#002CFB"
        />
      </g>
      <defs>
        <clipPath id="clip0_15_11565">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LogOut = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5L12.59 6.41L14.17 8H6V10H14.17L12.59 11.58L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z"
        fill="#ADBFDF"
      />
    </svg>
  );
};

export const AuthorizationIcon = { LogIn, LogOut };
