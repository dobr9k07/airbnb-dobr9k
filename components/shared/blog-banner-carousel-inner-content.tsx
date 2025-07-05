"use client";
import React, { useState, useEffect } from "react";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "../ui/carousel";
import { blogItems } from "@/lib/item/blogItem";
import Image from "next/image";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const BlogBannerCarouselInnerContent: React.FC<Props> = ({
  className,
}) => {
  const { canScrollPrev, canScrollNext, api } = useCarousel();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <>
      <CarouselContent className={className}>
        {blogItems.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className="relative max-w-[705px] max-h-[705px] mx-auto">
              <div className="h-[705px] w-[500px]">
                <Image
                  src={item.imageBanner}
                  alt="Banner"
                  fill
                  className={`object-cover mb-[126px] transition-opacity duration-700 ${
                    index === activeIndex ? "opacity-100" : "opacity-30"
                  }`}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="card-blog-banner">
                  <div
                    className={cn(
                      "text-center w-[474px] h-[250px] flex items-center justify-center flex-col gap-2.5 transition-opacity duration-700 delay-200",
                      index === activeIndex ? "opacity-100" : "opacity-30"
                    )}
                  >
                    <p className="text-xl font-extralight  text-black">
                      {item.tag}
                    </p>
                    <Title
                      text={item.title}
                      size="md"
                      className="text-black pl-23.5 pr-23.5"
                    />

                    <Link href={"#"}>
                      <Button
                        className="text-left text-[16px] font-extralight text-black underline"
                        variant={"link"}
                      >
                        Читайте далі
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {canScrollPrev && (
        <CarouselPrevious
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-9 h-9 bg-transparent border-none
        hover:scale-120 duration-200 ease-in hover:cursor-pointer"
        />
      )}

      {canScrollNext && (
        <CarouselNext
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-9 h-9 bg-transparent border-none
        hover:scale-120 duration-200 ease-in hover:cursor-pointer"
        />
      )}
    </>
  );
};
