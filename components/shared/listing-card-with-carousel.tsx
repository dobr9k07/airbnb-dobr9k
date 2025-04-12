import Link from "next/link";
import React from "react";
import { Heart, Star } from "lucide-react";
import { Button } from "../ui/button";
import { CategoryCarousel } from "./category-carousel";

interface Props {
  id: number;
  location: string;
  imageUrls: string[];
  date: string;
  price: number;
  rating: number;
  className?: string;
}

export const ListingCardWithCarousel: React.FC<Props> = ({
  id,
  location,
  imageUrls,
  date,
  price,
  rating,
  className,
}) => {
  return (
    <Link href="#" className="group w-85 max-w-sm cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <CategoryCarousel
          isCard={true}
          className="w-full h-full"
          imageUrls={imageUrls}
        />
        <div className="z-10 absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            type="submit"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-start text-sm">
        <div>
          <h3 className="font-medium text-base">{location}</h3>
          <p className="text-muted-foreground">{date}</p>
          <p className="mt-1">
            <span className="font-medium">{price}</span>
            <span className="text-muted-foreground"> / за 5 ночей</span>
          </p>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-black text-black" />
          <span>{rating.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};
