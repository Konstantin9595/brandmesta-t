"use client";
import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ServiceTabsProps, ServiceTabItem, TabOption } from "@/types";
import smoothScroll from "../../modules/smoothScroll";

const ServiceTabs: FC<ServiceTabsProps> = ({ tabOptions, tabItems }) => {
  const [isClient, setClient] = useState(false);
  const [activeTabId, setActiveTabId] = useState(1);
  const [isTransition, setTransition] = useState(false);

  const activeTabContents: ServiceTabItem[] = tabItems.filter(
    (tabItem: ServiceTabItem) => {
      return tabItem.tab_option_id === activeTabId;
    }
  );

  const onClickHandler = (e: SyntheticEvent) => {
    const element = e.target as HTMLElement;
    let tabIndex = element.tabIndex;

    if (activeTabId === tabIndex) {
      return;
    }

    if (element.tabIndex === -1) {
      const closest = element.closest("li");
      tabIndex = closest ? closest.tabIndex : -1;
    }

    setActiveTabId(tabIndex);
    if (!isTransition) {
      setTransition(() => true);
    }
  };

  const setPageCordinateProps = () => {
    const pos = (window.pageYOffset /
      (document.body.offsetHeight - window.innerHeight)) as any;
    document.body.style.setProperty("--scroll", pos);
  };

  // smooth scroll
  useEffect(() => {
    setClient(!isClient);

    window.addEventListener("scroll", setPageCordinateProps);

    smoothScroll.init({
      wrapperId: "wrapper",
      wrapperDamper: 0.07,
      cancelOnTouch: true,
    });

    return () => {
      smoothScroll.cancel();
      window.removeEventListener("scroll", setPageCordinateProps);
    };
  }, []);

  // custom cursor
  useEffect(() => {
    const body = document.querySelector("body") as any;
    const cursor = document.createElement("div") as any;

    cursor.style.cssText = `width: 24px; height: 24px; border-radius: 50%; background-color: rgba(255, 255, 0, 0.8); position: fixed; left: -100px; top: 0px; z-index: 20;`;

    body.append(cursor);

    const mousemoveHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${
        clientX + 100
      }px, ${clientY}px, 0)`;
    };

    document.addEventListener("mousemove", mousemoveHandler);

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      //cursor.remove();
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <ul className="service-tablist" onClick={onClickHandler}>
        {tabOptions.map((option: TabOption) => {
          return (
            <li
              key={option.id}
              id={`tabitem__${option.id}`}
              tabIndex={option.id}
              className={`service-tabitem ${
                activeTabId === option.id ? "active" : ""
              }`}
            >
              <span className="service-tabitem__lable">
                {option.label}
                <div className="tabitem-icon"></div>
              </span>
            </li>
          );
        })}
      </ul>
      <div
        key={activeTabId}
        className={`service-tabcontent ${isTransition ? "show" : ""}`}
      >
        {activeTabContents.map((tabItem: ServiceTabItem) => {
          return (
            <Link href="#" key={tabItem.id} className={`service-card`}>
              <div className="service-card__top">
                <h3 className="service-card__label">{tabItem.label}</h3>
                <div className={`${tabItem.icon_name}-icon`}></div>
              </div>
              <div className="service-card__middle">
                <h4 className="service-card__title">{tabItem.title}</h4>
                <div className="service-card__description">
                  {tabItem.description}
                </div>
              </div>
              <div className="service-card__bottom">
                <ul className="service-card__taglist">
                  {tabItem.service_tag.map((tag) => {
                    return (
                      <li key={tag.id} className="service-card__tagitem">
                        {tag.label}
                      </li>
                    );
                  })}
                </ul>
                <div className="service-card__layer"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ServiceTabs;
