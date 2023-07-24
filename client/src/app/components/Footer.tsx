import Link from "next/link";
import SvgAnimation from "./SvgAnimation";
import { ContactItem, FooterMenuItem } from "@/types";

const getFooterMenu = async (): Promise<FooterMenuItem[]> => {
  const footerMenu = [
    { id: "1", label: "Все права защищены ©2023", href: "#" },
    { id: "2", label: "Политика конфиденциальности", href: "#" },
    { id: "3", label: "Политика Cookie", href: "#" },
    { id: "4", label: "Разработано Friend Lee ", href: "#" },
  ];

  return footerMenu;
};

const getContactInfo = async (): Promise<ContactItem> => {
  const contactInfo = { phone: "+7 900 873 65 32", email: "MESTO@ MESTO  .RU" };

  return contactInfo;
};

const Footer = async () => {
  const footerMenuList = await getFooterMenu();
  const { email, phone } = await getContactInfo();

  return (
    <div className="footer">
      <SvgAnimation />
      <div className="footer-menu">
        <ul className="footer-menu__list">
          {footerMenuList.map((item: FooterMenuItem) => {
            return (
              <li key={item.id} className="footer-menu__item">
                <Link className="footer-menu__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-contacts">
        <ul className="footer-contacts__list">
          <li className="footer-contacts__item">
            <Link href={`tel:${phone}`} className="footer-contacts__link">
              {phone}
            </Link>
          </li>
          <li className="footer-contacts__item">
            <Link href={`mailto:${email}`} className="footer-contacts__link">
              {email}
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-action">
        <Link href="#" className="footer-action__link">
          Обсудить задачу
        </Link>
      </div>
    </div>
  );
};

export default Footer;
