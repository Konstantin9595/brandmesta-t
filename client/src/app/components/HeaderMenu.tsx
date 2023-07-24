import { MenuItem } from "@/types";
import Link from "next/link";

const getMenu = async (): Promise<MenuItem[]> => {
  return [
    { id: 1, href: "/services", label: "Услуги" },
    { id: 2, href: "/cases", label: "Кейсы" },
    { id: 3, href: "/contacts", label: "Контакты" },
  ];
};

const HeaderMenu = async () => {
  const menu = await getMenu();
  return (
    <div className="header-menu">
      <ul className="header-menu__list">
        {menu.map((item: MenuItem) => (
          <li key={item.id} className="header-menu__item">
            <Link className="header-menu-link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
