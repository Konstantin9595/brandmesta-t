import ServiceTabs from "./ServiceTabs";

export type TabItem = {
  id: number;
  lable: string;
};

export type CardTag = {
  id: number;
  lable: string;
};

export type TabContent = {
  id: number;
  tabItemId: number;
  cardLabel: string;
  cardTitle: string;
  cardDescription: string;
  cardTags: CardTag[];
  iconName: string;
};

const getTabItems = async (): Promise<TabItem[]> => {
  const tabItems = [
    { id: 1, lable: "Для бизнеса" },
    { id: 2, lable: "Для территории" },
  ];

  return tabItems;
};

const getTabContents = async (tabItemIds: string[]): Promise<TabContent[]> => {
  const tabContents: TabContent[] = [
    {
      id: 1,
      tabItemId: 1,
      cardLabel: "Исследования и анализ",
      cardTitle: "Хорошее начало.",
      cardDescription:
        "Комплексное погружение в контекст бизнеса, формирование цели и определение ключевых задач проекта",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "explore",
    },
    {
      id: 2,
      tabItemId: 1,
      cardLabel: "Брендинг и айдентика",
      cardTitle: "Единственно верный ход.",
      cardDescription:
        "Когда нужно отразить уникальный характер компании, ее ценности и  преимущества - все в запоминающихся образах для коммуникации с аудиторией",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "branding",
    },
    {
      id: 3,
      tabItemId: 1,
      cardLabel: "Стратегия и продвижение",
      cardTitle: "Правильное решение для роста.",
      cardDescription:
        "Когда пора заявить о себе и продумать все до мелочей: от стратегической цели до креативных постов в социальных сетях и публикаций в СМИ",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "strategy",
    },
    {
      id: 1,
      tabItemId: 2,
      cardLabel: "Исследования и анализ2",
      cardTitle: "Хорошее начало.",
      cardDescription:
        "Комплексное погружение в контекст бизнеса, формирование цели и определение ключевых задач проекта",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "explore",
    },
    {
      id: 2,
      tabItemId: 2,
      cardLabel: "Брендинг и айдентика2",
      cardTitle: "Единственно верный ход.",
      cardDescription:
        "Когда нужно отразить уникальный характер компании, ее ценности и  преимущества - все в запоминающихся образах для коммуникации с аудиторией",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "branding",
    },
    {
      id: 3,
      tabItemId: 2,
      cardLabel: "Стратегия и продвижение2",
      cardTitle: "Правильное решение для роста.",
      cardDescription:
        "Когда пора заявить о себе и продумать все до мелочей: от стратегической цели до креативных постов в социальных сетях и публикаций в СМИ",
      cardTags: [
        { id: 1, lable: "Позиционирование" },
        { id: 2, lable: "Характер и ценности бренда" },
        { id: 3, lable: "Нейминг / слоган" },
        { id: 4, lable: "Логотип и фирменный стиль" },
        { id: 5, lable: "Брендбук" },
      ],
      iconName: "strategy",
    },
  ];

  return tabContents;
};

const ServiceSection = async () => {
  const tabItems = await getTabItems();
  const tabContents = await getTabContents(["1", "2"]);

  return (
    <section className="service">
      <h2 className="service-title">Услуги</h2>
      <ServiceTabs tabItems={tabItems} tabContents={tabContents} />
    </section>
  );
};

export default ServiceSection;
