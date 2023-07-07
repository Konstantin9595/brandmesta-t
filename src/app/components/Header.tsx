import HeaderMenu from "./HeaderMenu";
import HeaderLeftStatic from "./HeaderLeftStatic";
import HeaderRightDynamic from "./HeaderRightDynamic";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <HeaderLeftStatic />
        <HeaderRightDynamic>
          <HeaderMenu />
        </HeaderRightDynamic>
      </div>
      <div className="header-bottom">
        <h1 className="header-title">Агентство территориального брендинга</h1>
        <div className="header-largelogo"></div>
      </div>
    </header>
  );
};

export default Header;
