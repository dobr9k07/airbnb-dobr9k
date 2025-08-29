import bcrypt from "bcryptjs";
import { prisma } from "./prisma-client";

async function up() {
  // Users
  const user1 = await prisma.user.create({
    data: {
      fullName: "Іван Петренко",
      email: "ivan@example.com",
      password: bcrypt.hashSync("11111", 10),
      verified: new Date(),
      role: "USER",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      fullName: "Адмін Системи",
      email: "admin@example.com",
      password: bcrypt.hashSync("11111", 10),
      verified: new Date(),
      role: "ADMIN",
    },
  });

  // Cities
  const kyiv = await prisma.city.create({
    data: {
      name: "Київ",
      nameEn: "Kyiv",
      link: "/kyiv",
      imageUrl: "https://picsum.photos/seed/kyiv/600/400",
    },
  });

  const lviv = await prisma.city.create({
    data: {
      name: "Львів",
      nameEn: "Lviv",
      link: "/lviv",
      imageUrl: "https://picsum.photos/seed/lviv/600/400",
    },
  });

  const odesa = await prisma.city.create({
    data: {
      name: "Одеса",
      nameEn: "Odesa",
      link: "/odesa",
      imageUrl: "https://picsum.photos/seed/odesa/600/400",
    },
  });

  const kharkiv = await prisma.city.create({
    data: {
      name: "Харків",
      nameEn: "Kharkiv",
      link: "/kharkiv",
      imageUrl: "https://picsum.photos/seed/kharkiv/600/400",
    },
  });

  // Hotels
  const hotels = await prisma.hotel.createMany({
    data: [
      {
        description: "Готель у центрі Києва з видом на Майдан.",
        imageUrl: [
          "https://picsum.photos/seed/hotel1a/600/400",
          "https://picsum.photos/seed/hotel1b/600/400",
          "https://picsum.photos/seed/hotel1c/600/400",
        ],
        price: 1500,
        owner: "ТОВ КиївГотель",
        comfort: [
          "Кондиціонер",
          "Ліфт",
          "Стійка реєстрації",
          "Камера зберігання багажу",
          "Лаунж і робоче місце",
          "Зручно для дітей",
        ],
        latitude: 50.4501,
        longitude: 30.5234,
        cityId: kyiv.id,
      },
      {
        description: "Затишний готель у Львові біля оперного театру.",
        imageUrl: [
          "https://picsum.photos/seed/hotel2a/600/400",
          "https://picsum.photos/seed/hotel2b/600/400",
          "https://picsum.photos/seed/hotel1c/600/400",
        ],
        price: 1200,
        owner: "Приватний власник",
        comfort: [
          "Кондиціонер",
          "Ліфт",
          "Стійка реєстрації",
          "Камера зберігання багажу",
          "Лаунж і робоче місце",
          "Зручно для дітей",
        ],
        latitude: 49.8397,
        longitude: 24.0297,
        cityId: lviv.id,
      },
      {
        description: "Готель на узбережжі Одеси з виходом до моря.",
        imageUrl: [
          "https://picsum.photos/seed/hotel3a/600/400",
          "https://picsum.photos/seed/hotel3b/600/400",
          "https://picsum.photos/seed/hotel1c/600/400",
        ],
        price: 2000,
        owner: "ТОВ Морський Бриз",
        comfort: ["WiFi", "Басейн", "СПА"],
        latitude: 46.4825,
        longitude: 30.7233,
        cityId: odesa.id,
      },
      {
        description: "Сучасний готель у центрі Харкова.",
        imageUrl: [
          "https://picsum.photos/seed/hotel4a/600/400",
          "https://picsum.photos/seed/hotel4b/600/400",
          "https://picsum.photos/seed/hotel1c/600/400",
        ],
        price: 1300,
        owner: "ТОВ ХарківКомфорт",
        comfort: ["WiFi", "Фітнес зал", "Паркінг"],
        latitude: 49.9935,
        longitude: 36.2304,
        cityId: kharkiv.id,
      },
    ],
  });

  // Отримуємо створені готелі (бо createMany не повертає їх)
  const allHotels = await prisma.hotel.findMany();

  // Додаємо по 4 номери для кожного готелю
  for (const hotel of allHotels) {
    await prisma.room.createMany({
      data: [
        {
          hotelId: hotel.id,
          type: "SINGLE",
          bedrooms: 1,
          bathrooms: 1,
          maxGuests: 1,
          price: 300,
          square: 18,
          ImageUrl: "https://picsum.photos/seed/room_single/600/400",
          comfort: [
            "Двоспльне ліжко",
            "Кондиціонер",
            "Телебачення",
            "Інтернет",
            "Холодильник",
          ],
        },
        {
          hotelId: hotel.id,
          type: "DOUBLE",
          bedrooms: 1,
          bathrooms: 1,
          maxGuests: 2,
          price: 400,
          square: 25,
          ImageUrl: "https://picsum.photos/seed/room_double/600/400",
          comfort: [
            "Двоспльне ліжко",
            "Кондиціонер",
            "Телебачення",
            "Інтернет",
            "Холодильник",
          ],
        },
        {
          hotelId: hotel.id,
          type: "SUITE",
          bedrooms: 2,
          bathrooms: 2,
          maxGuests: 4,
          price: 600,
          square: 50,
          ImageUrl: "https://picsum.photos/seed/room_suite/600/400",
          comfort: [
            "Двоспльне ліжко",
            "Кондиціонер",
            "Телебачення",
            "Інтернет",
            "Холодильник",
          ],
        },
        {
          hotelId: hotel.id,
          type: "KING",
          bedrooms: 3,
          bathrooms: 2,
          maxGuests: 6,
          price: 1000,
          square: 80,
          ImageUrl: "https://picsum.photos/seed/room_king/600/400",
          comfort: [
            "Двоспльне ліжко",
            "Кондиціонер",
            "Телебачення",
            "Інтернет",
            "Холодильник",
          ],
        },
      ],
    });
  }

  // Rates
  for (const hotel of allHotels) {
    await prisma.rate.create({
      data: {
        rating: 4.3,
        reviews: 100,
        Star1: 5,
        Star2: 8,
        Star3: 15,
        Star4: 30,
        Star5: 42,
        cleanliness: 4.5,
        accuracy: 4.4,
        arrival: 4.6,
        priceQuality: 4.2,
        hotelId: hotel.id,
      },
    });
  }

  // Reviews
  for (const hotel of allHotels) {
    await prisma.raview.createMany({
      data: [
        {
          userName: "Олександр",
          date: "2 тижні тому",
          comment: "Усе добре, ідеальне розсташування.",
          rate: 5,
          dateRegistration: "2 роки на hata",
          hotelId: hotel.id,
        },
        {
          userName: "Марія",
          date: "3 тижні тому",
          comment:
            "Ми з дівчиною зупинилися кілька днів у Празі. Квартира була чудовою, як удома. Це було в квартирі. Є гаряча вода. Велике ліжко, чисте в кімнаті та у ванній кімнаті. Надано рушники. Щодня вони приїжджають прибирати. І найголовніше, що розташування чудове. Усе знаходиться в декількох хвилинах ходьби від усіх пам 'яток. Я рекомендую це желе всім.",
          rate: 3,
          dateRegistration: "3 роки на hata",
          hotelId: hotel.id,
        },
        {
          userName: "Ірина",
          date: "1 місяць тому",
          comment: "Все сподобалося, особливо сніданки і розташування готелю.",
          rate: 4,
          dateRegistration: "1 рік на hata",
          hotelId: hotel.id,
        },
        {
          userName: "Віктор",
          date: "2 місяці тому",
          comment: "Чудовий готель з привітним персоналом. Рекомендую!",
          rate: 5,
          dateRegistration: "4 роки на hata",
          hotelId: hotel.id,
        },
      ],
    });
  }
  console.log("✅ Seed completed");
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "City" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Room" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Rate" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Raview" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Hotel" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error("Error seeding the database", error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
