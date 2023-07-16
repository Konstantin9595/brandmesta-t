import Link from "next/link";
import { FC } from "react";
import { ServiceItem } from "./ServiceSection";
import Button from "./Button";

type ServiceListProps = {
  serviceItems: ServiceItem[];
};
const ServiceList: FC<ServiceListProps> = async ({ serviceItems }) => {
  return (
    <>
      <ul className="service-list">
        {serviceItems.map((item: ServiceItem) => (
          <li key={item.id} className="service-list__item">
            <Link className="service-list__link" href={`${item.href}`}>
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
