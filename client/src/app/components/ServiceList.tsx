import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import { ServiceListItem, ServiceListProps } from "@/types";

const ServiceList: FC<ServiceListProps> = async ({ serviceItems }) => {
  return (
    <>
      <ul className="service-list">
        {serviceItems.map((item: ServiceListItem) => (
          <li key={item.id} className="service-list__item">
            <Link className="service-list__link" href={`#`}>
              <h3 className="service-list__title">{item.label}</h3>
              <div className="service-list__description">
                {item.description}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="service-button">
        <Button>Все услуги</Button>
      </div>
    </>
  );
};

export default ServiceList;
