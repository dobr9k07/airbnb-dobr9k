import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { carouselCategoryItems } from "@/lib/carouselCategoryItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const CarouselInnerContent: React.FC<Props> = ({ className }) => {
  const { canScrollPrev, canScrollNext } = useCarousel();
  return (
    <>
      <CarouselContent className="flex gap-0.5">
        {carouselCategoryItems.map((item) => (
          <CarouselItem key={item.id} className="basis-1/12">
            <Link
              key={item.id}
              href={"#"}
              className={cn(
                item.id === 0
                  ? "border-b-2 border-black pb-2 flex-shrink-0"
                  : "opacity-70 flex-shrink-0",
                "flex flex-col gap-y-2 items-center"
              )}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imageUrl}
                  alt="Category image"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-xs font-medium">{item.name}</p>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      {canScrollPrev && <CarouselPrevious className="cursor-pointer" />}
      {canScrollNext && <CarouselNext className="cursor-pointer" />}
    </>
  );
};
