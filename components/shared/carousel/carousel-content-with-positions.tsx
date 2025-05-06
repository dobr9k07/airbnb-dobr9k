'use client';
import { useCarousel } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

/**
 * Компонент, (поведінка CarouselContent) який додає класи в залежності від позиції слайду
 * @param param0
 * @returns
 */
export const CarouselContentWithPositions: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // Отримуємо посилання на контейнер каруселі та API через контекст
  const { carouselRef, orientation, api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Якщо є API, підписуємось на подію "select" для оновлення selectedIndex
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Визначаємо кількість дочірніх елементів, що передані в CarouselContent
  const count = React.Children.count(children);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex ",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        )}
      >
        {React.Children.map(children, (child, index) => {
          // Перевіряємо, чи дійсно child є React-елементом з пропсами
          if (!React.isValidElement<{ className?: string }>(child)) {
            return child;
          }
          let extraClass = "";
          if (index === selectedIndex) {
            extraClass = "comment-gradient-3"; // клас для центрального слайду
          } else if (index === (selectedIndex - 1 + count) % count) {
            extraClass = "comment-gradient-1"; // клас для лівого слайду
          } else if (index === (selectedIndex + 1) % count) {
            extraClass = "comment-gradient-2"; // клас для правого слайду
          }
          // Без примусового приведення до any – отримуємо значення className
          const origClass = child.props.className || "";
          return React.cloneElement(child, {
            className: cn(origClass, extraClass),
          });
        })}
      </div>
    </div>
  );
};
