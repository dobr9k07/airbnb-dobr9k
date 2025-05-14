import React from "react";
import { cn } from "@/lib/utils";

import { Container } from "./container";
import Image from "next/image";

import ImageHero from "@/public/imageHeroCms.png";
import AboutHero from "@/public/about/aboutHero.png";
import vector from "@/public/svg/Vector 150.svg";
import IconPlaceholder from "@/public/svg/IconPlaceholder.svg";
import { MAXWIDTH } from "@/lib/const-css";
import { Title } from "./title";

interface Props {
  className?: string;
  isAboutPage?: boolean;
}

export const HeroBanner: React.FC<Props> = ({
  isAboutPage = false,
  className,
}) => {
  return (
    <Container className={cn(`${MAXWIDTH}`, className)}>
      {!isAboutPage ? (
        <div className="w-full h-[769px] relative hero-gradient z-1">
          <Image
            src={ImageHero}
            alt="ImageHero"
            className="w-full h-full object-cover mix-blend-overlay absolute"
          />
          <div className="ml-65 pt-75 w-82.5">
            <Title
              text={"Cучасне житло з готельним комфортом"}
              size="xl"
              className="font-medium text-black"
            />
            <div className="flex items-center mt-[193px] gap-2">
              <Image src={IconPlaceholder} alt="star" width={33} height={33} />
              <p className="font-normal text-xs leading-[15px] text-left">
                Sonder The Winfield | Лос-Анджелес
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <Image
            src={AboutHero}
            alt="ImageHero"
            className="w-full object-cover"
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-6">
            <Title
              text="Будуємо майбутнє гостинності"
              className="font-medium text-center"
              size="3xl"
            ></Title>
            <p className="text-center text-xl font-medium">
              У нашим маємо місію переосмислити гостинність, створюючи виняткові
              умови для проживання всюди.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <Image
              src={vector}
              alt="Vector"
              className="w-full h-auto"
              layout="responsive"
            />
          </div>
        </div>
      )}
    </Container>
  );
};
