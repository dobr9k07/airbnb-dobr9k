"use client";
import React, { Fragment, RefObject } from "react";
import { Title } from "../title";
import { IRoom } from "@/lib/item/cardItem";
import { Separator } from "@/components/ui/separator";
import { RoomCard } from "./room-card";
import { useCategoryIntersection } from "@/hooks";

interface Props {
  title: string;
  categoryId: number;
  rooms: IRoom[];
}

export const AvailabilityBlock: React.FC<Props> = ({
  title,
  categoryId,
  rooms,
}) => {
  const ref = useCategoryIntersection(categoryId);

  return (
    <section id={title} ref={ref as RefObject<HTMLDivElement>}>
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
    </section>
  );
};
