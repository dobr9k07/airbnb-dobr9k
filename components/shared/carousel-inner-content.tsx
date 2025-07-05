"use client";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id?: number;
  imageUrls?: string[];
  className?: string;
}

export const CarouselInnerContent: React.FC<Props> = ({
  id,
  imageUrls,
  className,
}) => {
  const { canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      <Link href={`/rooms/${id}`}>
        <CarouselContent className={className}>
          {imageUrls?.map((url, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-square">
                <Image
                  src={url}
                  alt={`Image ${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-300 rounded-[34px]"
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
  );
};
