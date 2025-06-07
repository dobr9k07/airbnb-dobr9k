import Image from "next/image";
import React from "react";
import { Title } from "../title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IRoom } from "@/lib/cardItem";

interface Props {
  room: IRoom;
  className?: string;
}

const mapRoomType = {
  single: "Одномісний номер",
  double: "Двомісний номер",
  suite: "Номер Люкс",
  king: "Номер Кінг",
} as const;

export const RoomCard: React.FC<Props> = ({ room, className }) => {
  return (
    <>
      <div className="flex items-start justify-between mt-10.5">
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
            {room.comfort.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div>
          <Title
            className="font-normal mb-[157px]"
            text={`${room.price} (₴)`}
            size="lg"
          />
        </div>
      </div>
      <div className="flex gap-7.25 items-center justify-end ">
        <Link href="/order">
          <Button className="rounded-[41.5px] h-8.25 text-lg font-normal text-white pt-1 pb-1 pl-5.5 pr-5.5 mb-[33px]">
            Забронювати
          </Button>
        </Link>
        <Button className="rounded-[41.5px] h-8.25 text-lg font-normal text-white pt-1 pb-1 pl-5.5 pr-5.5 mb-[33px]">
          Виберіть дати
        </Button>
      </div>
    </>
  );
};
