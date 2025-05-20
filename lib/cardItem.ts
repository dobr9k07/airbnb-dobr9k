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
  rating: IRating;
  reviewsList?: IReview[];
}

type RoomType = "single" | "double" | "suite" | "king";

interface IRoom {
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
        imageUrl: "/card/images_4.png",
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
        imageUrl: "/card/images_5.png",
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
        imageUrl: "/card/images_6.png",
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
        imageUrl: "/card/images_6.png",
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
  },
];
