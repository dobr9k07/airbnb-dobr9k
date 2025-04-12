import { ICardItem } from "@/lib/cardItem";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { CardCarousel } from "./card-carousel";

interface Props {
  id: number;
  location: string;
  imageUrl: string[];
  stickers: string;
  date: string;
  price: number;
  className?: string;
}

export const ListingCard: React.FC<Props> = ({
  id,
  location,
  imageUrl,
  stickers,
  date,
  price,
  className,
}) => {
  return (
    <div className="flex flex-col border border-amber-950">
      <div className="relative h-72">
        {/* <Image
          src={`${imageUrl[0]}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover"
        /> */}

        <CardCarousel isCard={true} cardItem={imageUrl} />

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

      <Link href={"/"} className="mt-2">
        <h3 className="font-medium text-base">{location}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{stickers}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{date}</p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price}</span> за 5 ночей
        </p>
      </Link>
    </div>
  );
};
