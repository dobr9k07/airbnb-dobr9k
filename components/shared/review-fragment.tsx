import React from "react";
import { ReviewCard } from "./room";
import { IReview } from "@/lib/cardItem";

interface Props {
  className?: string;
  reviews: IReview[];
}

export const ReviewFragment: React.FC<Props> = ({ reviews, className }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {reviews.slice(0, 4).map((review) => (
        <ReviewCard key={review.id} item={review} className="w-[560px]" />
      ))}
    </div>
  );
};
