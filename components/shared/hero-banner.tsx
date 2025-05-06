import React from "react";
import { cn } from "@/lib/utils";

import { Container } from "./container";
import Image from "next/image";

import ImageHero from "@/public/imageHeroCms.png";
import IconPlaceholder from "@/public/svg/IconPlaceholder.svg";
import { MAXWIDTH } from "@/lib/const-css";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const HeroBanner: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn(`${MAXWIDTH}`, className)}>
      <div className="w-full h-[769px] relative hero-gradient z-1">
        <Image
          src={ImageHero}
          alt="ImageHero"
          className="w-full h-full object-cover mix-blend-overlay absolute"
        />
        <div className="ml-65 pt-75 w-82.5 border-1 border-amber-500">
          <Title
            text={"Cучасне житло з готельним комфортом"}
            size="xl"
            className="font-medium text-black"
          />
          <div className="flex items-center mt-[193px] gap-2">
            <Image src={IconPlaceholder} alt="star" width={33} height={33} />
            <p className="font-normal text-xs leading-[15px] text-left">Sonder The Winfield | Лос-Анджелес</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
