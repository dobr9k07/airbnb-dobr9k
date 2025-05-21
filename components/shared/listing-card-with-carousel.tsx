import Link from "next/link";
import React from "react";
import { Star } from "lucide-react";
import { CategoryCarousel } from "./category-carousel";
import { LikeButton } from "./form";
import { Title } from "./title";

interface Props {
  id: number;
  location: string;
  imageUrls: string[];
  price: number;
  rating?: number;
  reviwes?: number;
  className?: string;
}

export const ListingCardWithCarousel: React.FC<Props> = ({
  id,
  location,
  imageUrls,
  price,
  rating,
  reviwes,
  className,
}) => {
  return (
    <div className="group w-72 max-w-sm cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <CategoryCarousel
          id={id}
          isCard={true}
          className="w-full h-full"
          imageUrls={imageUrls}
        />
        <div className="z-10 absolute top-3.75 right-6">
          <LikeButton />
        </div>
      </div>

      <Link href={`/rooms/${id}`}>
        <div className="mt-3 flex justify-between items-start text-sm">
          <div>
            <Title
              text={location}
              size="2xs"
              className="text-black font-medium w-36"
            />
            <p className="mt-1 text-lg">
              <span>{`₴ ${price}`} ніч</span>
            </p>
          </div>

          <div className="flex items-center gap-1 flex-nowrap">
            <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            {rating ? (
              <span className="text-lg font-light">{`${rating.toFixed(
                1
              )} (${reviwes})`}</span>
            ) : (
              <span className="text-lg font-light">Нове</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
