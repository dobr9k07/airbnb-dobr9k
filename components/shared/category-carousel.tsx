"use client";

import React from "react";
import { Carousel, CarouselOptions } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";

interface Props {
  isCard: boolean;
  opts?: Partial<CarouselOptions>;
  imageUrls?: string[];
  className?: string;
}

export const CategoryCarousel: React.FC<Props> = ({
  isCard,
  opts,
  imageUrls,
  className,
}) => {
  return (
    <Carousel opts={opts} className={className}>
      {!imageUrls ? (
        <CarouselInnerContent isCard={isCard} />
      ) : (
        <CarouselInnerContent isCard={isCard} imageUrls={imageUrls} />
      )}
    </Carousel>
  );
};
