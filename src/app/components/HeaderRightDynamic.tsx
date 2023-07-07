"use client";
import { FC, PropsWithChildren, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";

const HeaderRightDynamic: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={`header-top__right ${isOpen ? "visible" : "hidden"}`}>
        {children}
        <div className="header-action">
          <button className="button">Обсудить задачу</button>
        </div>
      </div>
      <MobileMenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
    </>
  );
};

export default HeaderRightDynamic;
