import { IRating, IReview } from "@/lib/cardItem";
import React from "react";
import { Dot } from "lucide-react";
import { ProgressStat } from "./progress-stat";
import { Separator } from "@/components/ui/separator";
import { CardCategoryRating, TCategoty } from "./card-category-rating";
import { ReviewCard } from "./review-card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReviewDialog } from "./review-dialog";

interface Props {
  rating: IRating;
  reviews: IReview[];
}

export const ReviewBlock: React.FC<Props> = ({ rating, reviews }) => {
  const categories: { name: TCategoty; label: string }[] = [
    { name: "cleanliness", label: "Чистота" },
    { name: "accuracy", label: "Точність" },
    { name: "arrival", label: "Прибуття" },
    { name: "priceQuality", label: "Ціна/Якість" },
  ];

  return (
    <div className="flex flex-col w-full gap-3.5 ">
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
      <div className="flex flex-wrap justify-between">
        {reviews.slice(0, 4).map((review) => (
          <ReviewCard key={review.id} item={review} className="w-[560px]" />
        ))}
      </div>
      <div className="flex mb-5">
        {/* Почему??? */}
        {/* <ReviewDialog totalCount={rating.reviews} reviews={reviews} /> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="text-base font-light w-[280px] rounded-[41.5px] h-[33px] border-[0.25px]"
              variant={"outline"}
            >
              {`Показати всі ${rating.reviews} відгуків`}
            </Button>
          </DialogTrigger>

          <DialogContent className="min-w-xl max-h-[90vh] ">
            <DialogHeader>
              <DialogTitle className="flex flex-col items-center justify-center">
                Відгуки
                <Separator className="my-4" />
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[65vh] min-w-[550px] ">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  item={review}
                  className="w-[560px]"
                  isDialog={true}
                />
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
