import { cartCityItems } from "@/lib/cartCityItem";
import React from "react";
import { Container } from "./container";
import { CardCity } from "./card-city";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

// Масив позицій у сітці відповідно до grid-area всіх div
const gridPositions = [
  "row-start-1 row-end-2 col-start-1 col-end-2", // div1: London
  "row-start-2 row-end-3 col-start-1 col-end-2", // div2: Dubai
  "row-start-1 row-end-2 col-start-3 col-end-4", // div3: LosAngeles
  "row-start-2 row-end-3 col-start-3 col-end-4", // div4: Montreal
  "row-start-1 row-end-3 col-start-2 col-end-3", // div5: NewYork
];

export const CityBanner: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-18.25 gap-y-13 p-5.75 ">
        {cartCityItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col justify-end ${gridPositions[index]}`}
          >
            <CardCity
              className="relative"
              imageUrl={item.imageUrl}
              name={item.name}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Button className="rounded-[38px] mt-[83px] h-17 text-[20px] font-light text-white leading-[24px] pl-[38px] pr-[38px] pt-[22px] pb-[22px]">
          Переглянути всі міста
        </Button>
      </div>
    </Container>
  );
};
