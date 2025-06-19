import React from "react";
import { Title } from "./title";
import { IRoom } from "@/lib/cardItem";
import { RoomDetails } from "./room-details";
import { RoomComforts } from "./room-comforts";
import { cn } from "@/lib/utils";

interface Props {
  room: IRoom;
  className?: string;
}

export const RoomInfo: React.FC<Props> = ({ room, className }) => {
  const mapRoomType = {
    single: "Одномісний номер",
    double: "Двомісний номер",
    suite: "Номер Люкс",
    king: "Номер Кінг",
  } as const;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Title text={mapRoomType[room.type]} size="lg" />
      <RoomDetails room={room} />
      <RoomComforts comfort={room.comfort} />
    </div>
  );
};
