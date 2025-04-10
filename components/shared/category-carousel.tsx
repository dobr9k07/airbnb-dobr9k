"use client";

import React from "react";

import { Carousel } from "@/components/ui/carousel";
import { CarouselInnerContent } from "./carousel-inner-content";

interface Props {
  className?: string;
}

export const CategoryCarousel: React.FC<Props> = ({ className }) => {
  return (
    <Carousel
      opts={{ align: "start", slidesToScroll: 5 }}
      className="w-full max-w-[1200px] ml-10"
    >
      <CarouselInnerContent />
    </Carousel>
  );
};
