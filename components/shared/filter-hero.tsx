import React from "react";
import { Container } from "./container";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const FilterHero: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <div className="w-full flex flex-col gap-3.5">
        <div className="w-[1210px] h-[83px] bg-primary-white rounded-[41.5px] flex items-center justify-center">
          <p className="text-[24px] font-medium">Пошук</p>
        </div>
        <Title
          text={"Вибір, що відкриває світ"}
          size="lg"
          className="font-normal text-left"
        />
        <p className="w-105 font-light text-[25px] leading-[30px] text-left">
          Для тебе, для друзів, для родини — апартаменти та бутик-готелі у 60+
          містах по всьому світу.
        </p>
      </div>
    </Container>
  );
};
