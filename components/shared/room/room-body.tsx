import React from "react";
import { Container } from "../container";
import { DescriptionImageBlock } from "./description-image-block";
import { DescriptionBlockText } from "./description-block-text";
import { cn } from "@/lib/utils";
import { MAXWIDTH } from "@/constans/const-css";
import { NavRoom } from "./nav-room";
import { AvailabilityBlock } from "./availability-block";
import { ConvenienceBlock } from "./convenience-block";
import { Title } from "../title";
import { ReviewBlock } from "./review-block";
import { ReservationPolicy } from "./reservation-policy";

import { ICardItem } from "@/lib/item/cardItem";

interface Props {
  room: ICardItem;
}

export const RoomBody: React.FC<Props> = ({ room }) => {
  return (
    <>
      {/* Блок опису*/}
      <Container className="max-w-[1390px]">
        <DescriptionImageBlock
          imageUrl={room.imageUrl}
          title="Огляд"
          categoryId={1}
        />
      </Container>

      <Container className="mb-[48px]">
        <DescriptionBlockText
          className="w-full mt-11"
          owner={room.owner}
          isRating={room.rating ? true : false}
          raiting={room.rating?.rating ?? 0}
          reviews={room.reviews}
          location={room.location}
          description={room.description}
        />
      </Container>

      {/* Блок навігації*/}
      <Container className={cn(MAXWIDTH, "sticky top-0 z-300 bg-white")}>
        <Container>
          <NavRoom />
        </Container>
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Наявність і тарифи*/}
      <Container className="mt-[53px]">
        <AvailabilityBlock
          rooms={room.rooms}
          title="Наявність і тарифи"
          categoryId={2}
        />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Зручності*/}
      <Container className="mt-[53px]">
        <ConvenienceBlock
          comforts={room.comfort}
          imageUrl={room.imageUrl}
          title="Зручності"
          categoryId={3}
        />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Відгуки*/}
      <Container className="mt-[53px]">
        <Title text="Відгуки" size="lg" className="font-medium mb-5.5" />
        <ReviewBlock
          rating={room?.rating}
          reviews={room?.reviewsList}
          title="Відгуки"
          categoryId={4}
        />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Політики бронювання*/}
      <Container className="mt-[53px]">
        <ReservationPolicy title="Політика бронювання" categoryId={5} />
      </Container>
    </>
  );
};
