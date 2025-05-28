import { IRating, IReview } from "@/lib/cardItem";
import React from "react";
import { Dot } from "lucide-react";
import { ProgressStat } from "./progress-stat";
import { Separator } from "@/components/ui/separator";
import { CardCategoryRating, TCategoty } from "./card-category-rating";
import { ReviewDialog } from "./review-dialog";
import { ReviewFragment } from "../review-fragment";

interface Props {
  rating?: IRating;
  reviews?: IReview[];
}

export const ReviewBlock: React.FC<Props> = ({ rating, reviews }) => {
  const categories: { name: TCategoty; label: string }[] = [
    { name: "cleanliness", label: "Чистота" },
    { name: "accuracy", label: "Точність" },
    { name: "arrival", label: "Прибуття" },
    { name: "priceQuality", label: "Ціна/Якість" },
  ];

  return (
    <>
      {rating && reviews && (
        <div className="flex flex-col w-full gap-3.5">
          <div className="flex items-center text-2xl">
            <p>{rating.rating}/5</p>
            <Dot />
            <p>{rating.reviews} відгуків</p>
          </div>
          <div className=" flex items-center justify-between h-[160px] 0">
            <div className="flex flex-col">
              <p className="text-xl mb-3">Загальний рейтинг</p>
              {[5, 4, 3, 2, 1].map((count) => (
                <ProgressStat
                  key={count}
                  value={rating[`Star${count}` as keyof IRating]}
                  count={count}
                  className="w-[200px]"
                />
              ))}
            </div>
            <Separator
              orientation="vertical"
              className="border-[0.5px] border-black"
            />

            {categories.map((category) => (
              <React.Fragment key={category.name}>
                <CardCategoryRating
                  className="h-full"
                  category={category.name}
                  rating={rating[category.name as keyof IRating]}
                />
                <Separator
                  orientation="vertical"
                  className="border-[0.5px] border-black"
                />
              </React.Fragment>
            ))}
          </div>

          <ReviewFragment reviews={reviews} />

          <div className="flex mb-5">
            <ReviewDialog totalCount={rating.reviews} reviews={reviews} />
          </div>
        </div>
      )}
    </>
  );
};
