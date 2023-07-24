export type Page = {
  id: number;
  title: string;
  description: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type FooterMenuItem = {
  id: string;
  label: string;
  href: string;
};

export type ContactItem = {
  phone: string;
  email: string;
};

export type MenuItem = {
  id: number;
  href: string;
  label: string;
};

export type ServiceListProps = {
  serviceItems: ServiceListItem[];
};

export type ServiceTabItem = {
  id: number;
  label: string;
  title: string;
  description: string;
  icon_name: string;
  tab_option_id: number;
  created_at: string;
  updated_at: string;
  service_tag: ServiceTag[];
};

export type ServiceTag = {
  id: number;
  label: string;
  created_at: string;
  updated_at: string;
};

export type TabOption = {
  id: number;
  label: string;
  tab_item_id: number;
};

// export type CardTag = {
//   id: number;
//   lable: string;
// };

// export type TabContent = {
//   id: number;
//   tabItemId: number;
//   cardLabel: string;
//   cardTitle: string;
//   cardDescription: string;
//   cardTags: CardTag[];
//   iconName: string;
// };

export type ServiceListItem = {
  id: number;
  created_at: string;
  updated_at: string;
  label: string;
  description: string;
  url: string;
};

export type ServiceTabsProps = {
  tabOptions: TabOption[];
  tabItems: ServiceTabItem[];
};
