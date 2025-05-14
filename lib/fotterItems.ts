interface ICompany {
  id: number;
  value: string;
  link: string;
}

interface ISupport {
  id: number;
  value: string;
  link: string;
}

export const companyItems: ICompany[] = [
  {
    id: 1,
    value: "Про нас",
    link: "/about",
  },
  {
    id: 2,
    value: "Новини",
    link: "/",
  },
  {
    id: 3,
    value: "Кар'єра",
    link: "/",
  },
  {
    id: 4,
    value: "Для преси",
    link: "/",
  },
  {
    id: 5,
    value: "Для бізнесу та груп",
    link: "/",
  },
  {
    id: 6,
    value: "Нерухомість",
    link: "/",
  },
  {
    id: 7,
    value: "Корпоративна відповідальність",
    link: "/",
  },
  {
    id: 8,
    value: "Відносини з інвесторами",
    link: "/",
  },
  {
    id: 9,
    value: "Вакансії",
    link: "/",
  },
];

export const supportItems: ISupport[] = [
  {
    id: 1,
    value: "Довідковий центр",
    link: "/help",
  },
  {
    id: 2,
    value: "Протидія дискримінації",
    link: "/help",
  },
  {
    id: 3,
    value: "Підтримка людей з інвалідністю",
    link: "/help",
  },
  {
    id: 4,
    value: "Варіанти скасування бронювань",
    link: "/help",
  },
  {
    id: 5,
    value: "Надіслати скаргу від сусідів",
    link: "/help",
  },
];
