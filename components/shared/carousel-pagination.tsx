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

interface Props {
  content: React.ReactNode;
  className?: string;
}

export const CarouselPagination: React.FC<Props> = ({ content, className }) => {
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
    <div className={cn("w-full", className)}>
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
        {content}
        <CarouselPrevious
          className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 max-sm:hidden"
          size={"icon"}
          variant={"ghost"}
        />
        <CarouselNext
          className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 max-sm:hidden"
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
