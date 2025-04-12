"use client";

import React from "react";

import { Carousel } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";
import { ICardItem } from "@/lib/cardItem";

interface Props {
  isCard: boolean;
  cardItem?: string[];
  className?: string;
}

export const CardCarousel: React.FC<Props> = ({
  isCard,
  cardItem,
  className,
}) => {
  return (
    <Carousel className="rounded-lg h-full object-cover border border-amber-400">
      <CarouselInnerContent isCard={isCard} cardItem={cardItem} />
    </Carousel>
  );
};
