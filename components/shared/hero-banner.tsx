import React from "react";
import { cn } from "@/lib/utils";

import { Container } from "./container";
import Image from "next/image";
import vector from "@/public/svg/Vector 150.svg";
import IconPlaceholder from "@/public/svg/IconPlaceholder.svg";
import { MAXWIDTH } from "@/lib/const-css";
import { Title } from "./title";
import { HeroBannerItems } from "@/lib/heroBaner";

import AboutHero from "@/public/about/aboutHero.png";
import { ChangeImageTimer } from "./change-image-timer";

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
          <ChangeImageTimer
            imageUrls={HeroBannerItems.map((item) => item.imageUrl)}
            time={5000}
          />

          <div className="absolute ml-65 w-82.5 h-full flex flex-col justify-center">
            <Title
              text={"Cучасне житло з готельним комфортом"}
              size="xl"
              className="font-medium text-black"
            />
            <p className="text-2xl font-normal text-black">
              де б ти не був. Тепер разом із <b>hata</b>
            </p>
          </div>
          <div className="absolute bottom-18 left-65 flex items-center gap-2">
            <Image src={IconPlaceholder} alt="star" width={33} height={33} />
            <p className="font-normal text-xs">
              Sonder The Winfield | Лос-Анджелес
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <Image
            src={AboutHero}
            alt="ImageHero"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-6">
            <Title
              text="Будуємо майбутнє гостинності"
              className="font-medium text-center"
              size="3xl"
            ></Title>
            <p className="text-center text-xl font-medium">
              У hata ми маємо місію переосмислити гостинність, забезпечуючи
              виняткові умови для проживання всюди.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <Image src={vector} alt="Vector" className="w-full h-auto" />
          </div>
        </div>
      )}
    </Container>
  );
};
