export interface ICardItem {
  id: number;
  location: string;
  description: string;
  imageUrl: string[];
  stickers: string;
  date: string;
  price: number;
  reviews: number;
  owner: string;
  comfort: string[];
  rooms: IRoom[];
  rating?: IRating;
  reviewsList?: IReview[];
  latitude: number;
  longitude: number;
}

type RoomType = "single" | "double" | "suite" | "king";

export interface IRoom {
  id: number;
  type: RoomType;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  price: number;
  square: number;
  imageUrl: string;
  comfort: string[];
}

export interface IRating {
  id: number;
  rating: number;
  reviews: number;
  Star1: number;
  Star2: number;
  Star3: number;
  Star4: number;
  Star5: number;
  cleanliness: number;
  accuracy: number;
  arrival: number;
  priceQuality: number;
}

export interface IReview {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
  dateRegistration: string;
}

export const cardItem: ICardItem[] = [
  {
    id: 0,
    location: "Понта-Делгада, Портуґалія",
    description: "Moinho das Feteiras | The Mill",
    imageUrl: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/db17fce1-4ad0-45d8-8d7b-ba5ccdfe770c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/def4a486-26a6-4555-8c05-4736a4ca262b.jpeg?im_w=720",
    ],
    stickers: "На відстані 4829 кілометрів",
    date: "30 січ. - 4 лют.",
    price: 31716,

    reviews: 326,
    owner: "Генрі",
    comfort: [
      "Кондиціонер",
      "Ліфт",
      "Стійка реєстрації",
      "Камера зберігання багажу",
      "Лаунж і робоче місце",
      "Зручно для дітей",
    ],
    rooms: [
      {
        id: 0,
        type: "single",
        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        price: 3500,
        square: 47,
        imageUrl:
          "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/db17fce1-4ad0-45d8-8d7b-ba5ccdfe770c.jpeg?im_w=720",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 1,
        type: "double",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 3700,
        square: 68,
        imageUrl:
          "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/db17fce1-4ad0-45d8-8d7b-ba5ccdfe770c.jpeg?im_w=720",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 2,
        type: "suite",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 4300,
        square: 84,
        imageUrl:
          "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/db17fce1-4ad0-45d8-8d7b-ba5ccdfe770c.jpeg?im_w=720",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 3,
        type: "king",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 5700,
        square: 158,
        imageUrl:
          "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/def4a486-26a6-4555-8c05-4736a4ca262b.jpeg?im_w=720",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
    ],
    latitude: 51.507,
    longitude: -0.1246,
  },
  {
    id: 1,
    location: "Бейсуотер, Лондон",
    description:
      "Пориньте в атмосферу вишуканого Лондона разом з Генрі. Вікторіанський фасад з величними колонами та чарівними балюстрадами одразу переносить у минуле. Та елегантність не закінчується зовні — всередині вас чекає сучасний дизайн, яскраві акценти та розкішні ванні кімнати з мармуром. У вестибюлі є кавовий бар, але не виключено, що захочеться залишитися в номері. А якщо вирішите вийти — ви в самому серці району Бейсвотер. Завітайте до пабу Leinster Arms, прогуляйтесь чарівними садами палацу Кенсінгтон, або знайдіть вражаючі фальшиві фасади на Leinster Gardens — будівлі, створені лише для того, щоб приховати залізничні колії. Як би ви не провели свій час у Лондоні — почніть його з Генрі. У цьому готелі hata працює стійка реєстрації 24/7. Наша команда на місці завжди готова зробити ваше перебування ще кращим.",
    imageUrl: ["/card/image_1.png", "/card/image_2.png", "/card/image_3.png"],
    stickers: "На відстані 4829 кілометрів",
    date: "30 січ. - 4 лют.",
    price: 31716,
    reviews: 326,
    owner: "Генрі",
    comfort: [
      "Кондиціонер",
      "Ліфт",
      "Стійка реєстрації",
      "Камера зберігання багажу",
      "Лаунж і робоче місце",
      "Зручно для дітей",
    ],
    rooms: [
      {
        id: 0,
        type: "single",
        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        price: 3500,
        square: 47,
        imageUrl: "/card/image_4.png",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 1,
        type: "double",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 3700,
        square: 68,
        imageUrl: "/card/image_5.png",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 2,
        type: "suite",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 4300,
        square: 84,
        imageUrl: "/card/image_6.png",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
      {
        id: 3,
        type: "king",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 5700,
        square: 158,
        imageUrl: "/card/image_6.png",
        comfort: [
          "Двоспльне ліжко",
          "Кондиціонер",
          "Телебачення",
          "Інтернет",
          "Холодильник",
        ],
      },
    ],
    rating: {
      id: 0,
      rating: 4.8,
      reviews: 326,
      Star1: 10,
      Star2: 20,
      Star3: 50,
      Star4: 100,
      Star5: 146,
      cleanliness: 4.7,
      accuracy: 4.8,
      arrival: 4.9,
      priceQuality: 4.6,
    },
    reviewsList: [
      {
        id: 0,
        name: "Dagmar",
        date: "2 тижні тому",
        text: "Усе добре, ідеальне розсташування.",
        rating: 5,
        dateRegistration: "2 роки на hata",
      },
      {
        id: 1,
        name: "Nikola",
        date: "3 тижні тому",
        text: "Ми з дівчиною зупинилися кілька днів у Празі. Квартира була чудовою, як удома. Це було в квартирі. Є гаряча вода. Велике ліжко, чисте в кімнаті та у ванній кімнаті. Надано рушники. Щодня вони приїжджають прибирати. І найголовніше, що розташування чудове. Усе знаходиться в декількох хвилинах ходьби від усіх пам 'яток. Я рекомендую це желе всім.",
        rating: 3,
        dateRegistration: "3 роки на hata",
      },
      {
        id: 2,
        name: "Dagmar",
        date: "2 тижні тому",
        text: "Усе добре, ідеальне розсташування.",
        rating: 5,
        dateRegistration: "2 роки на hata",
      },
      {
        id: 3,
        name: "Nikola",
        date: "3 тижні тому",
        text: "Ми з дівчиною зупинилися кілька днів у Празі. Квартира була чудовою, як удома. Це було в квартирі. Є гаряча вода. Велике ліжко, чисте в кімнаті та у ванній кімнаті. Надано рушники. Щодня вони приїжджають прибирати. І найголовніше, що розташування чудове. Усе знаходиться в декількох хвилинах ходьби від усіх пам 'яток. Я рекомендую це желе всім.",
        rating: 3,
        dateRegistration: "3 роки на hata",
      },
      {
        id: 4,
        name: "Dagmar",
        date: "2 тижні тому",
        text: "Усе добре, ідеальне розсташування.",
        rating: 5,
        dateRegistration: "2 роки на hata",
      },
      {
        id: 5,
        name: "Nikola",
        date: "3 тижні тому",
        text: "Ми з дівчиною зупинилися кілька днів у Празі. Квартира була чудовою, як удома. Це було в квартирі. Є гаряча вода. Велике ліжко, чисте в кімнаті та у ванній кімнаті. Надано рушники. Щодня вони приїжджають прибирати. І найголовніше, що розташування чудове. Усе знаходиться в декількох хвилинах ходьби від усіх пам 'яток. Я рекомендую це желе всім.",
        rating: 3,
        dateRegistration: "3 роки на hata",
      },
    ],
    latitude: 51.5033,
    longitude: -0.1196,
  },
  {
    id: 2,
    location: "Барселона, Іспанія",
    description: "Світла квартира з видом на море",
    imageUrl: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1334791218146120509/original/acca3551-66de-4d34-931a-c2bd444cac4d.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1334791218146120509/original/16a63a68-af2a-4787-96dd-15d4bd457a33.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1334791218146120509/original/ca071441-beb0-43ff-ac50-61b92a8b16cb.jpeg?im_w=720",
    ],
    stickers: "На відстані 1987 кілометрів",
    date: "15 бер. - 20 бер.",
    price: 28400,
    reviews: 412,
    owner: "Марія",
    comfort: [
      "Балкон",
      "Кондиціонер",
      "Кухня",
      "Пральна машина",
      "Вид на море",
      "Швидкий Wi-Fi",
    ],
    rooms: [
      {
        id: 0,
        type: "double",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 4200,
        square: 55,
        imageUrl:
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1334791218146120509/original/16a63a68-af2a-4787-96dd-15d4bd457a33.jpeg?im_w=720",
        comfort: [
          "Двоспальне ліжко",
          "Кондиціонер",
          "Інтернет",
          "Посудомийна машина",
          "Сейф",
        ],
      },
      {
        id: 1,
        type: "suite",
        bedrooms: 2,
        bathrooms: 2,
        guests: 4,
        price: 6700,
        square: 95,
        imageUrl:
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1334791218146120509/original/16a63a68-af2a-4787-96dd-15d4bd457a33.jpeg?im_w=720",
        comfort: [
          "Двоспальне ліжко",
          "Кондиціонер",
          "Інтернет",
          "Джакузі",
          "Вид на море",
        ],
      },
    ],
    rating: {
      id: 1,
      rating: 4.9,
      reviews: 412,
      Star1: 5,
      Star2: 8,
      Star3: 30,
      Star4: 120,
      Star5: 249,
      cleanliness: 4.9,
      accuracy: 4.8,
      arrival: 5.0,
      priceQuality: 4.7,
    },
    reviewsList: [
      {
        id: 0,
        name: "Olha",
        date: "1 тиждень тому",
        text: "Дуже гарне помешкання. Все чисто і зручно, чудовий вид.",
        rating: 5,
        dateRegistration: "1 рік на hata",
      },
      {
        id: 1,
        name: "Tomas",
        date: "2 тижні тому",
        text: "Залишились дуже задоволені. Власниця приємна і допомагала з усім.",
        rating: 4,
        dateRegistration: "4 роки на hata",
      },
    ],
    latitude: 51.5055,
    longitude: -0.0754,
  },
  {
    id: 3,
    location: "Прага, Чехія",
    description: "Сучасне лофт-помешкання в центрі міста",
    imageUrl: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1155772170782706856/original/b6beb182-4d36-44a1-9bb5-8c20126e9f08.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1155772170782706856/original/3b215d43-4644-48f2-8b14-87c8b49cf5ed.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NTc3MjE3MDc4MjcwNjg1Ng%3D%3D/original/49c98fb0-e960-4de1-a9ee-45179a079e32.jpeg?im_w=720",
    ],
    stickers: "На відстані 1204 кілометри",
    date: "5 квіт. - 10 квіт.",
    price: 24800,
    reviews: 297,
    owner: "Ян",
    comfort: [
      "Високі стелі",
      "Кавоварка",
      "Поруч із метро",
      "Wi-Fi",
      "Пральна машина",
      "Місце для роботи",
    ],
    rooms: [
      {
        id: 0,
        type: "single",
        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        price: 3200,
        square: 40,
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NTc3MjE3MDc4MjcwNjg1Ng%3D%3D/original/49c98fb0-e960-4de1-a9ee-45179a079e32.jpeg?im_w=720",
        comfort: [
          "Односпальне ліжко",
          "Інтернет",
          "Холодильник",
          "Стіл",
          "Опалення",
        ],
      },
      {
        id: 1,
        type: "double",
        bedrooms: 1,
        bathrooms: 1,
        guests: 2,
        price: 3900,
        square: 52,
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NTc3MjE3MDc4MjcwNjg1Ng%3D%3D/original/49c98fb0-e960-4de1-a9ee-45179a079e32.jpeg?im_w=720",
        comfort: [
          "Двоспальне ліжко",
          "Кондиціонер",
          "Wi-Fi",
          "Посудомийна машина",
          "Душова кабіна",
        ],
      },
    ],
    rating: {
      id: 2,
      rating: 4.7,
      reviews: 297,
      Star1: 12,
      Star2: 14,
      Star3: 45,
      Star4: 100,
      Star5: 126,
      cleanliness: 4.6,
      accuracy: 4.7,
      arrival: 4.8,
      priceQuality: 4.5,
    },
    reviewsList: [
      {
        id: 0,
        name: "Kateryna",
        date: "1 місяць тому",
        text: "Неймовірна квартира, дуже зручно добиратися. Усе було на висоті!",
        rating: 5,
        dateRegistration: "1 рік на hata",
      },
      {
        id: 1,
        name: "Marek",
        date: "3 тижні тому",
        text: "Гарна ціна за таку якість. Місце розташування – супер.",
        rating: 4,
        dateRegistration: "2 роки на hata",
      },
    ],
    latitude: 51.5014,
    longitude: -0.1419,
  },
];
