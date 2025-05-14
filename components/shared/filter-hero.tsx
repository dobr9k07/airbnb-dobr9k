import React from "react";
import { Container } from "./container";

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
      </div>
    </Container>
  );
};
