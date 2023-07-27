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

  useEffect(() => {
    setClient(!isClient);

    smoothScroll.init({
      wrapperId: "wrapper",
      wrapperDamper: 0.07,
      cancelOnTouch: true,
    });

    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          (window.pageYOffset /
            (document.body.offsetHeight - window.innerHeight)) as any
        );
      },
      false
    );

    // let intersectionRatio = 0;

    // const contentSection = document.querySelector(
    //   ".brand-title"
    // ) as HTMLElement;
    // const headerBottom = document.querySelector(".header-bottom");
    // const brandLine = document.querySelector(".brand-line");
    // let baseOffset = 38;
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     const ratio = entries[0].intersectionRatio;
    //     if (ratio <= 0) {
    //       return;
    //     }
    //     //console.log("intersectionRatio: ", ratio);
    //     intersectionRatio = ratio;
    //     // check onScroll and if intersectionRatio === 1 then move .header-bottom and .brand-line else reverseMove
    //   },
    //   {
    //     //rootMargin: "40px 0px 40px 0px",
    //     threshold: 1,
    //   }
    // );

    // observer.observe(contentSection);

    //

    // window.addEventListener("scroll", () => {
    //   if (intersectionRatio !== 1) {
    //     return;
    //   }
    //   baseOffset += 32;
    //   //console.log("baseOffset: ", baseOffset);
    //   //headerBottom?.animate({ transform: `translateY(-${baseOffset})px` }, {});
    //   //headerBottom.style.transform = `translateY(-${baseOffset})px`;
    // });

    return () => {
      smoothScroll.cancel();
      //observer.disconnect();
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
