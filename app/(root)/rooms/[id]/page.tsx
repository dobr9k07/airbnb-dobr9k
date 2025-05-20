import { Container, ReviewBlock, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cardItem } from "@/lib/cardItem";
import { MAXWIDTH } from "@/lib/const-css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoStar } from "react-icons/io5";

const gridPositions2 = [
  "row-start-1 row-end-3 col-start-1 col-end-3",
  "row-start-1 row-end-2 col-start-3 col-end-4",
  "row-start-2 row-end-3 col-start-3 col-end-4",
];

interface IimgSizes {
  w: number;
  h: number;
}

interface ISizes {
  [key: number]: IimgSizes;
}

const imgSizes: ISizes = {
  0: { w: 887, h: 713 },
  1: { w: 489, h: 338 },
  2: { w: 489, h: 338 },
};

interface IRating {
  [key: number]: string;
}
const rating: IRating = {
  1: "Не рекомендую",
  2: "Погано",
  3: "Задовільно",
  4: "Чудово",
  5: "Відмінно",
};

const nav = [
  "Огляд",
  "Наявність і тарифи",
  "Зручності",
  "Відгуки",
  "Політика бронювання",
];

const mapRoomType = {
  single: "Одномісний номер",
  double: "Двомісний номер",
  suite: "Номер Люкс",
  king: "Номер Кінг",
} as const;

export default async function Room({
  params: { id },
}: {
  params: { id: string };
}) {
  const room = cardItem.find((room) => room.id === Number(id));

  if (!room) {
    return notFound();
  }

  return (
    <>
      {/* Блок опису*/}
      <Container className="max-w-[1390px]">
        <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-4.5 mt-2.75 container">
          {room.imageUrl.map((imageUrl, index) => (
            <div key={index} className={cn("flex", gridPositions2[index])}>
              <Image
                src={imageUrl}
                alt="room"
                width={imgSizes[index].w}
                height={imgSizes[index].h}
                className="object-cover flex-1"
              />
            </div>
          ))}
        </div>
      </Container>

      <Container className="mb-[48px]">
        <div className="w-full flex flex-col items-start mt-11">
          <Title text={room.owner} size="xl" className="font-medium " />
          <div className="flex items-center gap-1.75 text-lg font-light">
            <IoStar color="yellow" className="h-4.5 w-4.5" />
            <p>{room.rating.rating}/5</p>
            <p>{rating[Math.trunc(room.rating.rating)]}</p>
            <p className="underline">({room.reviews} відгуків)</p>
          </div>
          <div className="flex flex-col gap-5.25 w-[995px] text-lg">
            <p>{room.location}</p>
            <p>{room.description}</p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="w-full">
          <ul className="flex items-start gap-8 pt-[27px] pb-[27px]">
            {nav.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className={cn(MAXWIDTH, "border-2 border-b")}></Container>

      {/* Блок Наявність і тарифи*/}
      <Container className="mt-[53px]">
        <Title text="Наявність і тарифи" size="lg" className="font-medium" />
        <div className="flex flex-col items-end justify-between">
          <div className="h-8.25 w-[500px]"></div>
          <div className="w-[545px] rounded-[22px] bg-primary-white ">
            <p className="pt-[18px] pb-[23px] pl-[30px] pr-[10px] text-xl">
              Бронюйте спокійно. Скасуйте бронювання за 3 дні до заїзду, щоб
              отримати повне відшкодування.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {room.rooms.map((room, index) => (
            <>
              {index !== 0 && <Separator className="border-2" />}
              <div
                key={index}
                className="flex items-start justify-between mt-10.5"
              >
                <Image
                  src={room.imageUrl}
                  alt="room"
                  width={395}
                  height={213}
                  className="rounded-[17px] object-cover"
                />
                <div className="flex flex-col gap-4 ml-[-160px]">
                  <Title text={mapRoomType[room.type]} size="lg" />
                  <div className="flex items-center gap-4 text-base">
                    <p>{room.bathrooms} спальня</p>
                    <p>{room.guests} гість</p>
                    <p>{room.bathrooms} ванна кімната</p>
                    <p>{room.square} квадратних метрів</p>
                  </div>
                  <ul className="list-disc pl-5 text-base columns-2">
                    {room.comfort.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Title
                    className="font-normal mb-[157px]"
                    text={`${room.price} (₴)`}
                    size="lg"
                  />
                  <Button className="rounded-[41.5px] h-8.25 text-lg font-normal text-white pt-1 pb-1 pl-5.5 pr-5.5 mb-[33px]">
                    Виберіть дати
                  </Button>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>

      <Container className={cn(MAXWIDTH, "border-2 border-b")}></Container>

      {/* Блок Зручності*/}
      <Container className="mt-[53px]">
        <Title text="Зручності" size="lg" className="font-medium mb-5.5" />
        <div className="flex flex-col mb-10.75">
          <div className="flex gap-8 mb-16.5">
            {room.imageUrl.slice(1, 3).map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="room"
                width={590}
                height={388}
                className="rounded-[43px] object-cover"
              />
            ))}
          </div>
          <div className="flex gap-8">
            {room.comfort.map((item, index) => (
              <p key={index} className="text-base font-light">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Container>
      <Container className={cn(MAXWIDTH, "border-2 border-b")}></Container>

      {/* Блок Відгуки*/}
      <Container className="mt-[53px]">
        <Title text="Відгуки" size="lg" className="font-medium mb-5.5" />
        <ReviewBlock rating={room.rating} reviews={room.reviewsList ?? []} />
      </Container>

      <Container className={cn(MAXWIDTH, "border-2 border-b")}></Container>
      {/* Блок Політики бронювання*/}
      <Container className="mt-[53px]">
        <Title
          text="Політика бронювання"
          size="lg"
          className="font-medium mb-5.5"
        />
        <div className="w-full flex flex-col gap-9.5 mb-10">
          <div className="flex gap-3.75 items-start">
            <Image
              src={"/svg/IconClok.svg"}
              alt="clock"
              width={30}
              height={30}
              className="object-cover"
            />
            <div className="flex flex-col gap-2.75">
              <p className="text-xl font-light">
                Заселення о 16:00. Виселення об 11.00
              </p>
              <p className="text-base font-light max-w-[540px]">
                Ви можете запросити ранній заїзд та/або пізній виїзд після
                бронювання. Наша команда зробить усе можливе, щоб задовольнити
                будь-які запити залежно від наявності.
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-start">
            <Image
              src={"/svg/IconDisablePerson.svg"}
              alt="clock"
              width={30}
              height={30}
              className="object-cover"
            />
            <div className="flex flex-col gap-2.75">
              <p className="text-xl font-light">Доступність</p>
              <ul className="text-base font-light max-w-[540px] list-disc">
                <li>Дозвіл для інвалідних візків недоступний </li>
                <li>Є ліфти</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3.75 items-start">
            <Image
              src={"/svg/IconRoole.svg"}
              alt="clock"
              width={30}
              height={30}
              className="object-cover"
            />
            <div className="flex flex-col gap-2.75">
              <p className="text-xl font-light">Правила дому</p>
              <ul className="text-base font-light max-w-[540px] list-disc">
                <li>Куріння заборонено ( навіть на балконах ) </li>
                <li>Без домашніх тварин ( навіть дуже милих )</li>
                <li>Жодних вечірок ( навіть дуже тихих )</li>
              </ul>
              <p className="text-xs font-thin ml-[-25px]">
                * Будь ласка, поважайте своїх сусідів і зведіть до мінімуму шум
                з 22:00 до 8:00.
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-start">
            <Image
              src={"/svg/IconAllert.svg"}
              alt="clock"
              width={30}
              height={30}
              className="object-cover"
            />
            <div className="flex flex-col gap-2.75">
              <p className="text-xl font-light">Зверніть увагу</p>
              <ul className="font-light max-w-[540px] list-disc">
                <li>
                  Обслуговування номерів і щоденне прибирання не доступні .
                </li>
                <li>Це центральне місце , де чутно шум поїздів .</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="font-light mb-5">Що ще ви хотіли б знати?</p>
        <p className="font-light">
          Надішліть електронного листа нашому відділу на hata@gmail.com.
        </p>
      </Container>
    </>
  );
}
