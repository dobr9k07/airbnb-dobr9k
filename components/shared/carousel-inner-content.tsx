"use client";
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

interface Props {
  id?: number;
  isCard: boolean;
  imageUrls?: string[];
  className?: string;
}

export const CarouselInnerContent: React.FC<Props> = ({
  id,
  isCard,
  imageUrls,
  className,
}) => {
  const { canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      {!isCard ? (
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
          {canScrollPrev && (
            <CarouselPrevious className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          )}
          {canScrollNext && <CarouselNext className="cursor-pointer" />}
        </>
      ) : (
        <>
          <Link href={`/rooms/${id}`}>
            <CarouselContent>
              {imageUrls?.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full aspect-square">
                    <Image
                      src={url}
                      alt={`Image ${index}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-300 "
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Link>
          {canScrollPrev && (
            <CarouselPrevious
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
            bg-white/80 hover:bg-white rounded-full w-8 h-8
            opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer
            pointer-events-none group-hover:pointer-events-auto"
            />
          )}
          {canScrollNext && (
            <CarouselNext
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
            bg-white/80 hover:bg-white rounded-full w-8 h-8
            opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity
            pointer-events-none group-hover:pointer-events-auto"
            />
          )}
        </>
      )}
    </>
  );
};

