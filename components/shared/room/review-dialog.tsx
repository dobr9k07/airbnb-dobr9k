import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IReview } from "@/lib/item/cardItem";
import { ReviewCard } from "./review-card";

interface Props {
  totalCount: number;
  reviews: IReview[];
}

export const ReviewDialog: React.FC<Props> = ({ totalCount, reviews }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-base font-light w-[280px] rounded-[41.5px] h-[33px] border-[0.25px]"
            variant={"outline"}
          >
            {`Показати всі ${totalCount} відгуків`}
          </Button>
        </DialogTrigger>

        <DialogContent className="min-w-xl max-h-[90vh] z-300 mt-7">
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
    </>
  );
};
