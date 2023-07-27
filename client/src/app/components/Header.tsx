import HeaderMenu from "./HeaderMenu";
import HeaderLeftStatic from "./HeaderLeftStatic";
import HeaderRightDynamic from "./HeaderRightDynamic";
import SvgAnimation from "./SvgAnimation";
import { fetchPageData } from "../../http/api";
import Ticker from "./Ticker";

const getTitle = async () => {
  const { title } = await fetchPageData(1);

  return title;
};

const Header = async () => {
  const title = await getTitle();
  return (
    <header className="header">
      <SvgAnimation />
      <div className="header-top">
        <HeaderLeftStatic />
        <HeaderRightDynamic>
          <HeaderMenu />
        </HeaderRightDynamic>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__content">
          <h1 className="header-title">{title}</h1>
          <div className="header-largelogo"></div>
        </div>
        <Ticker />
      </div>
    </header>
  );
};

export default Header;
