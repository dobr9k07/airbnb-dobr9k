"use client";
import React from "react";
import { IReview } from "@/lib/item/cardItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  item: IReview;
  isDialog?: boolean;
}

export const ReviewCard: React.FC<Props> = ({
  item,
  isDialog = false,
  className,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < item.rating ? "text-yellow-500" : "text-gray-300"
        }`}
        fill={index < item.rating ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <div className={className}>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      {!isDialog ? (
        <Popover onOpenChange={(open) => setFocused(open)}>
          <div className="flex flex-col pt-4 pl-4">
            <div className="flex items-center mb-2">
              <Avatar className="w-10 h-10 mr-3">
                <AvatarFallback>{item.name[0]}</AvatarFallback>
                <AvatarImage src="/" alt={item.name} />
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.dateRegistration}
                </p>
                <div className="flex items-center gap-1">
                  {renderStars()}
                  <p className="text-sm text-muted-foreground">• {item.date}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-hidden">{item.text}</p>
          </div>
          <PopoverTrigger asChild>
            {item.text.length > 270 && (
              <Button variant="link" className=" text-black text-lg">
                Показати більше
              </Button>
            )}
          </PopoverTrigger>
          <PopoverContent className="w-160 rounded-[30px]">
            <div className="flex flex-col p-4 ">
              <div className="flex items-center mb-2">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                  <AvatarImage src="/" alt={item.name} />
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.dateRegistration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {renderStars()}
                <p className="text-sm text-muted-foreground">• {item.date}</p>
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="flex flex-col p-4">
          <div className="flex items-center mb-2">
            <Avatar className="w-10 h-10 mr-3">
              <AvatarFallback>{item.name[0]}</AvatarFallback>
              <AvatarImage src="/" alt={item.name} />
            </Avatar>
            <div className="flex flex-col">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                {item.dateRegistration}
              </p>
              <div className="flex items-center gap-1">
                {renderStars()}
                <p className="text-sm text-muted-foreground">• {item.date}</p>
              </div>
            </div>
          </div>

          <p className={cn("text-sm", expanded ? "" : "text-hidden")}>
            {item.text}
          </p>
          {item.text.length > 150 && (
            <Button
              variant="link"
              className="mt-2 text-black text-lg"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Показати менше" : "Показати більше"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
