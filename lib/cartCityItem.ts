interface ICartCityItem {
  id: number;
  name: string;
  imageUrl: string;
}

export const cartCityItems: ICartCityItem[] = [
  {
    id: 1,
    name: "Лондон",
    imageUrl: "/city/London.png",
  },
  {
    id: 2,
    name: "Дубай",
    imageUrl: "/city/Dubai.png",
  },

  {
    id: 3,
    name: "Лос Анджелес",
    imageUrl: "/city/LosAngeles.png",
  },
  {
    id: 4,
    name: "Монреаль",
    imageUrl: "/city/Montreal.png",
  },
  {
    id: 5,
    name: "Нью Йорк",
    imageUrl: "/city/NewYork.png",
  },
];
