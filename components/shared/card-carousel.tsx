"use client";

import React from "react";

import { Carousel } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";

interface Props {
  id: number;
  isCard: boolean;
  cardItem?: string[];
  className?: string;
}

export const CardCarousel: React.FC<Props> = ({
  id,
  isCard,
  cardItem,
  className,
}) => {
  return (
    <Carousel className="rounded-lg h-[400px] object-cover border border-amber-400">
      <CarouselInnerContent imageUrls={cardItem} id={id} />
    </Carousel>
  );
};
