"use client";
import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { TabContent, TabItem } from "./ServiceSection";
import Link from "next/link";

type ServiceTabsProps = {
  tabItems: TabItem[];
  tabContents: TabContent[];
};

const ServiceTabs: FC<ServiceTabsProps> = ({ tabItems, tabContents }) => {
  const [isClient, setClient] = useState(false);
  const [activeTabId, setActiveTabId] = useState(1);
  const [isTransition, setTransition] = useState(false);

  const activeTabContents: TabContent[] = tabContents.filter(
    (tabContent: TabContent) => {
      return tabContent.tabItemId === activeTabId;
    }
  );

  const onClickHandler = (e: SyntheticEvent) => {
    const element = e.target as HTMLElement;
    let tabIndex = element.tabIndex;

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
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <ul className="service-tablist" onClick={onClickHandler}>
        {tabItems.map((item: TabItem) => {
          return (
            <li
              key={item.id}
              id={`tabitem__${item.id}`}
              tabIndex={item.id}
              className={`service-tabitem ${
                activeTabId === item.id ? "active" : ""
              }`}
            >
              <span className="service-tabitem__lable">
                {item.lable}
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
        {activeTabContents.map((tabContent: TabContent) => {
          return (
            <Link href="#" key={tabContent.id} className={`service-card`}>
              <div className="service-card__top">
                <h3 className="service-card__label">{tabContent.cardLabel}</h3>
                <div className={`${tabContent.iconName}-icon`}></div>
              </div>
              <div className="service-card__middle">
                <h4 className="service-card__title">{tabContent.cardTitle}</h4>
                <div className="service-card__description">
                  {tabContent.cardDescription}
                </div>
              </div>
              <div className="service-card__bottom">
                <ul className="service-card__taglist">
                  {tabContent.cardTags.map((tag) => {
                    return (
                      <li key={tag.id} className="service-card__tagitem">
                        {tag.lable}
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
