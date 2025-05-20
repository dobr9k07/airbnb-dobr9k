import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export type TCategoty = "cleanliness" | "accuracy" | "arrival" | "priceQuality";

interface Props {
  className?: string;
  category: TCategoty;
  rating: number;
}

export const CardCategoryRating: React.FC<Props> = ({
  category,
  rating,
  className,
}) => {
  const categoryType = {
    cleanliness: "Чистота",
    accuracy: "Точність",
    arrival: "Прибуття",
    priceQuality: "Ціна/Якість",
  } as const;

  const categoryIcon = {
    cleanliness: "/svg/IconClean.svg",
    accuracy: "/svg/IconAccuracy.svg",
    arrival: "/svg/IconArrival.svg",
    priceQuality: "/svg/IconPriceQuality.svg",
  } as const;

  return (
    <div className={cn("flex flex-col gap-1 justify-start w-[150px] pt-1", className)}>
      <p className="text-xl font-light">{categoryType[category]}</p>
      <p className="text-xl font-light mb-6.25">{rating}</p>
      <Image
        src={categoryIcon[category]}
        alt="category"
        width={55}
        height={55}
      />
    </div>
  );
};
