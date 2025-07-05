"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { commentItem } from "@/lib/item/commentItem";
import { CarouselContentWithPositions } from "./carousel/carousel-content-with-positions";
import { cn } from "@/lib/utils";

export const CarouselPagination = () => {
  // Зберігаємо екземпляр API каруселі, поточний індекс та кількість слайдів
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
        <CarouselContentWithPositions>
          {commentItem.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center basis-1/3"
            >
              <div className="w-[354px] h-75 flex flex-col items-start justify-start comment-gradient">
                <p className="w- text-xl font-light pl-4 pr-4 pt-10.75 pb-5.25">
                  {item.text}
                </p>
                <p className="text-xl font-normal pl-4">{item.author}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContentWithPositions>
        <CarouselPrevious
          className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2"
          size={"icon"}
          variant={"ghost"}
        />
        <CarouselNext
          className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2"
          size={"icon"}
          variant={"ghost"}
        />
      </Carousel>

      {/* Рендеринг пагінації: кожна кнопка відповідає одному слайду */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
};
