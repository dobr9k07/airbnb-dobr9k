import React from "react";
import { Carousel, CarouselOptions } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";

interface Props {
  id?: number;
  opts?: Partial<CarouselOptions>;
  imageUrls?: string[];
  className?: string;
}

export const CategoryCarousel: React.FC<Props> = ({
  id,
  opts,
  imageUrls,
  className,
}) => {
  return (
    <Carousel opts={opts} className={className}>
      <CarouselInnerContent id={id} imageUrls={imageUrls} />
    </Carousel>
  );
};
