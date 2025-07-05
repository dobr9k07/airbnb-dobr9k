import Image from "next/image";
import React from "react";
import { Title } from "../title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IRoom } from "@/lib/item/cardItem";
import { RoomInfo } from "../room-info";

interface Props {
  room: IRoom;
}

export const RoomCard: React.FC<Props> = ({ room }) => {
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
        <RoomInfo room={room} className="ml-[-160px]" />
        <Title className="font-normal" text={`${room.price} (₴)`} size="lg" />
      </div>
      <div className="flex gap-7.25 items-center justify-end ">
        <Link href="/checkout">
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
