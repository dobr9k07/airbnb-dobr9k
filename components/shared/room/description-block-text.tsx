import React from "react";
import { Title } from "../title";
import { IoStar } from "react-icons/io5";
import { cn } from "@/lib/utils";

interface Props {
  owner: string;
  isRating: boolean;
  raiting: number;
  reviews: number;
  location: string;
  description?: string;
  className?: string;
}

interface IRating {
  [key: number]: string;
}
const rating: IRating = {
  1: "Не рекомендую",
  2: "Погано",
  3: "Задовільно",
  4: "Чудово",
  5: "Відмінно",
};

export const DescriptionBlockText: React.FC<Props> = ({
  owner,
  isRating,
  raiting,
  reviews,
  location,
  description,
  className,
}) => {
  return (
    <section className={cn("flex flex-col items-start ", className)}>
      {description ? (
        <Title text={owner} size="xl" className="font-medium" />
      ) : (
        <Title text={owner} size="md" className="font-normal" />
      )}
      {isRating && (
        <div className="flex items-center gap-1.75 text-lg font-light">
          <IoStar color="yellow" className="h-4.5 w-4.5" />
          <p>{raiting}/5</p>
          <p>{rating[Math.trunc(raiting)]}</p>
          <p className="underline">({reviews} відгуків)</p>
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-5.25  text-lg",
          description ? "w-[995px]" : ""
        )}
      >
        <p>{location}</p>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
};
