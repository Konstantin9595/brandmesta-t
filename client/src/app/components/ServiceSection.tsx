import { ServiceListItem, ServiceTabItem, TabOption } from "@/types";
import CallToActionButton from "./CallToActionButton";
import ServiceList from "./ServiceList";
import ServiceTabs from "./ServiceTabs";
import { fetchListItems, fetchTabItems, fetchTabOptions } from "@/http/api";

const getTabOptions = async (): Promise<TabOption[]> => {
  const options = await fetchTabOptions();

  // const tabItems = [
  //   { id: 1, label: "Для бизнеса" },
  //   { id: 2, label: "Для территории" },
  // ];

  // return tabItems;
  return options;
};

const getTabItems = async (tabItemIds: string[]): Promise<ServiceTabItem[]> => {
  const tabItems: ServiceTabItem[] = await fetchTabItems();

  return tabItems;
};

const getServiceItems = async () => {
  const serviceItems: ServiceListItem[] = await fetchListItems();

  return serviceItems;
};

const ServiceSection = async () => {
  const tabOptions = await getTabOptions();
  const tabContents = await getTabItems(["1", "2"]);
  const serviceItems = await getServiceItems();
  return (
    <section className="service">
      <h2 className="service-title">Услуги</h2>
      <ServiceTabs tabOptions={tabOptions} tabItems={tabContents} />
      <ServiceList serviceItems={serviceItems} />
      <CallToActionButton />
    </section>
  );
};

export default ServiceSection;
