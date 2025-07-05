import React from "react";
import { Carousel, CarouselOptions } from "../ui/carousel";
import { BlogBannerCarouselInnerContent } from "./blog-banner-carousel-inner-content";

interface Props {
  opts?: Partial<CarouselOptions>;
  className?: string;
}

export const BlogBannerCarousel: React.FC<Props> = ({ opts, className }) => {
  const carouselOpts = {
    duration: 0, // Швидкість переходу в мілісекундах (за замовчуванням 25)
    ...opts, // Дозволяє перезаписувати опції ззовні
  };
  return (
    <Carousel opts={carouselOpts} className=" max-w-[705px] bg-transparent">
      <BlogBannerCarouselInnerContent />
    </Carousel>
  );
};
