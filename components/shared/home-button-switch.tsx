"use client";
import React, { useEffect } from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { FaRegMap } from "react-icons/fa";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const HomeButtonSwitch: React.FC<Props> = ({ className }) => {
  const [isStickyVisible, setIsStickyVisible] = React.useState(true);

  useEffect(() => {
    const topContainer = document.getElementById("top-container");
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsStickyVisible(!entry.isIntersecting); // Якщо перший контейнер видно, ховаємо sticky
      },
      { root: null, threshold: 0.1 } // Налаштовуємо перетин (threshold)
    );

    if (topContainer) {
      observer.observe(topContainer);
    }

    return () => {
      if (topContainer) {
        observer.unobserve(topContainer);
      }
    };
  }, []);

  return (
    <>
      <Container
        id="top-container"
        className="flex items-center justify-center flex-col"
      >
        <Title text={"Продовжити огляд категорії «ВАУ-помешкання»"} size="xl" />
        <Button
          className=" w-45 h-12 bg-slate-950 text-primary-foreground hover:cursor-pointer hover:scale-110 hover:bg-slate-950"
        >
          Показати більше
        </Button>
      </Container>

      {isStickyVisible && (
        <Container
          id="sticky-container"
          className="flex items-center justify-center sticky bottom-10 z-50"
        >
          <Button
            className="bg-slate-950 text-primary-foreground  rounded-full hover:cursor-pointer hover:scale-110 hover:bg-slate-950"
            size={"lg"}
          >
            Показати мапу <FaRegMap />
          </Button>
        </Container>
      )}
    </>
  );
};
