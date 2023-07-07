"use client";

import { FC, PropsWithoutRef, HTMLAttributes } from "react";

const MobileMenuButton: FC<
  PropsWithoutRef<{ isOpen: boolean } & HTMLAttributes<any>>
> = ({ isOpen, ...props }) => {
  return (
    <div {...props} className="mobile-menu">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mobile-button ${isOpen ? "close" : "open"}`}
      >
        <rect
          className="mobile-button__item first"
          x="4"
          y="9"
          width="24"
          height="2"
          fill="#D8E6F1"
        />
        <rect
          className="mobile-button__item second"
          x="4"
          y="15"
          width="24"
          height="2"
          fill="#D8E6F1"
        />
        <rect
          className="mobile-button__item third"
          x="4"
          y="21"
          width="24"
          height="2"
          fill="#D8E6F1"
        />
      </svg>
    </div>
  );
};

export default MobileMenuButton;
