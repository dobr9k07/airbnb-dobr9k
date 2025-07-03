import { cartCityItems, ICartCityItem } from "@/lib/cartCityItem";
import React from "react";
import { Container } from "./container";
import { CardCity } from "./card-city";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import Link from "next/link";

interface Props {
  className?: string;
  items: ICartCityItem[];
  isCitiesPage?: boolean;
}

// Масив позицій у сітці відповідно до grid-area всіх div
const gridPositions = [
  "row-start-1 row-end-2 col-start-1 col-end-2", // div1: London
  "row-start-2 row-end-3 col-start-1 col-end-2", // div2: Dubai
  "row-start-1 row-end-2 col-start-3 col-end-4", // div3: LosAngeles
  "row-start-2 row-end-3 col-start-3 col-end-4", // div4: Montreal
  "row-start-1 row-end-3 col-start-2 col-end-3", // div5: NewYork
];

export const CityBanner: React.FC<Props> = ({
  items = cartCityItems,
  isCitiesPage = false,
  className,
}) => {
  return (
    <Container className={cn("flex flex-col", className)}>
      <Title
        text={"Вибір, що відкриває світ"}
        size="lg"
        className="font-normal text-left pl-5.75"
      />
      <p className="w-105 font-light text-[25px] leading-[30px] text-left pl-5.75">
        Для тебе, для друзів, для родини — апартаменти та бутик-готелі у 60+
        містах по всьому світу.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-18.25 gap-y-13 p-5.75 ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "flex flex-col justify-end }",
              index < gridPositions.length ? `${gridPositions[index]}` : ""
            )}
          >
            <CardCity
              className="relative"
              imageUrl={item.imageUrl}
              name={item.name}
              link={item.link}
            />
          </div>
        ))}
      </div>
      {!isCitiesPage && (
        <div className="w-full flex items-center justify-center">
          <Button
            asChild
            className="rounded-[38px] mt-[83px] h-17 text-[20px] font-light text-white leading-[24px] pl-[38px] pr-[38px] pt-[22px] pb-[22px]"
          >
            <Link href="/cities">Переглянути всі міста</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};
