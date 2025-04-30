interface ICompany {
  id: number;
  value: string;
}

interface ISupport {
  id: number;
  value: string;
}

export const companyItems: ICompany[] = [
  {
    id: 1,
    value: "Про нас",
  },
  {
    id: 2,
    value: "Новини",
  },
  {
    id: 3,
    value: "Кар'єра",
  },
  {
    id: 4,
    value: "Для преси",
  },
  {
    id: 5,
    value: "Для бізнесу та груп",
  },
  {
    id: 6,
    value: "Нерухомість",
  },
  {
    id: 7,
    value: "Корпоративна відповідальність",
  },
  {
    id: 8,
    value: "Відносини з інвесторами",
  },
  {
    id: 9,
    value: "Вакансії",
  },
];

export const supportItems: ISupport[] = [
  {
    id: 1,
    value: "Довідковий центр",
  },
  {
    id: 2,
    value: "Протидія дискримінації",
  },
  {
    id: 3,
    value: "Підтримка людей з інвалідністю",
  },
  {
    id: 4,
    value: "Варіанти скасування бронювань",
  },
  {
    id: 5,
    value: "Надіслати скаргу від сусідів",
  },
];
