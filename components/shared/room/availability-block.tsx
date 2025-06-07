import React, { Fragment } from "react";
import { Title } from "../title";
import { IRoom } from "@/lib/cardItem";
import { Separator } from "@/components/ui/separator";
import { RoomCard } from "./room-card";

interface Props {
  rooms: IRoom[];
  className?: string;
}

export const AvailabilityBlock: React.FC<Props> = ({ rooms, className }) => {
  return (
    <>
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
        {rooms.map((room, index) => (
          <Fragment key={room.id}>
            {index !== 0 && <Separator className="border-2" />}
            <RoomCard room={room} />
          </Fragment>
        ))}
      </div>
    </>
  );
};
