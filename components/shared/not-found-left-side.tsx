import React from "react";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";

export const NotFoundLeftSide: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center w-2/5">
      <Title text="Ой..." size="2xl" className="font-medium" />
      <Title text="сторінку не знайдено" size="2lg" className="font-normal" />
      <Title
        text="Сторінка, яку ви шукаєте, не існує або посилання може бути пошкоджене. Поверніться на головну сторінку або перезавантажте."
        size="md"
        className="font-light"
      />
      <div className="w-full flex items-center justify-between mt-9.25">
        <Link href={"/"}>
          <Button className="rounded-2xl h-8.25 w-[192px] text-base text-white font-light leading-[19px]">
            На головну
          </Button>
        </Link>
        <Button className="rounded-2xl h-8.25 w-[192px] text-base text-white font-light leading-[19px]">
          Перезавантажити
        </Button>
      </div>
    </div>
  );
};
