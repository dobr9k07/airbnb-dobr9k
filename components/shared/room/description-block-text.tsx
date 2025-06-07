import React from "react";
import { Title } from "../title";
import { IoStar } from "react-icons/io5";

interface Props {
  owner: string;
  isRating: boolean;
  raiting: number;
  reviews: number;
  location: string;
  description: string;
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
    <div className="w-full flex flex-col items-start mt-11">
      <Title text={owner} size="xl" className="font-medium " />
      {isRating && (
        <div className="flex items-center gap-1.75 text-lg font-light">
          <IoStar color="yellow" className="h-4.5 w-4.5" />
          <p>{raiting}/5</p>
          <p>{rating[Math.trunc(raiting)]}</p>
          <p className="underline">({reviews} відгуків)</p>
        </div>
      )}
      <div className="flex flex-col gap-5.25 w-[995px] text-lg">
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
