import React from "react";
import { Carousel, CarouselOptions } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";

interface Props {
  id?: number;
  isCard: boolean;
  opts?: Partial<CarouselOptions>;
  imageUrls?: string[];
  className?: string;
}

export const CategoryCarousel: React.FC<Props> = ({
  id,
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
        <CarouselInnerContent id={id} isCard={isCard} imageUrls={imageUrls} />
      )}
    </Carousel>
  );
};
