import { IRoom } from "@/lib/item/cardItem";
import React from "react";

interface Props {
  room: IRoom;
}

export const RoomDetails: React.FC<Props> = ({ room }) => {
  return (
    <div className="flex items-center gap-4 text-base">
      <p>{room.bathrooms} спальня</p>
      <p>{room.guests} гість</p>
      <p>{room.bathrooms} ванна кімната</p>
      <p>{room.square} квадратних метрів</p>
    </div>
  );
};
