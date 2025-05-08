export interface IBlogItem {
  id: number;
  title: string;
  imageUrl: string;
}

export const blogItems: IBlogItem[] = [
  {
    id: 1,
    title: "Тягне до Барселони? Знайомтесь — Педро з INSOLENTt",
    imageUrl: "/blog/image01.png",
  },
  {
    id: 2,
    title: "П’ять захопливих подорожей на день по Лазурному узбережжю",
    imageUrl: "/blog/image02.png",
  },
  {
    id: 3,
    title: "Паспорт гордості: наші фаворити сезону",
    imageUrl: "/blog/image03.png",
  },
  {
    id: 4,
    title: "Секрет hata: як провести 24 години у Флоренції",
    imageUrl: "/blog/image04.png",
  },
];
