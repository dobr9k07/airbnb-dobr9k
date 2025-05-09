export interface IBlogItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageBanner: string;
  imageUrl: string;
}

export const blogItems: IBlogItem[] = [
  {
    id: 1,
    tag: "Культура",
    title: "Тягне до Барселони? Знайомтесь — Педро з INSOLENT",
    description:
      "Літо наближається до Барселони, і ми прагнемо сонця, ковтків напоїв та найкращого з…",
    imageUrl: "/blog/image01.png",
    imageBanner: "/blog/imagebaner.png",
  },
  {
    id: 2,
    tag: "Подорожі",
    title: "П’ять захопливих подорожей на день по Лазурному узбережжю",
    description:
      "З відкриттям нашого нового напрямку, Канн, у нас виникає спокуса провести весь …",
    imageUrl: "/blog/image02.png",
    imageBanner: "",
  },
  {
    id: 3,
    tag: "Культура",
    title: "Паспорт гордості: наші фаворити сезону",
    description:
      "Червень вже не за горами, тому ознайомтеся з нашими найкращими …",
    imageUrl: "/blog/image03.png",
    imageBanner: "",
  },
  {
    id: 4,
    tag: "Подорожі",
    title: "Секрет hata: як провести 24 години у Флоренції",
    description:
      "hata їде до Флоренції цієї весни — і ми вважаємо, що вам варто приєднатися…",
    imageUrl: "/blog/image04.png",
    imageBanner: "",
  },
  {
    id: 5,
    tag: "Культура",
    title: "Секрет hata: як провести 24 години у Флоренції",
    description:
      "Готуєтеся до весняного чи осіннього дня перегонів? У нас є hata для вас…",
    imageUrl: "/blog/image05.png",
    imageBanner: "",
  },
  {
    id: 6,
    tag: "Культура",
    title: "Секрет hata: як провести 24 години у Флоренції",
    description:
      "hata Spotlight – це серія, присвячена деяким з наших улюблених (і талановитих!) гостей. У …",
    imageUrl: "/blog/image06.png",
    imageBanner: "",
  },
];
