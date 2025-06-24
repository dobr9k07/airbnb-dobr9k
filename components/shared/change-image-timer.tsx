"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  imageUrls: string[];
  time?: number;
  className?: string;
}

export const ChangeImageTimer: React.FC<Props> = ({
  imageUrls,
  time = 4000,
  className,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    // Автоматична зміна зображень кожні 4 секунди
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, time);

    // Очищення інтервалу при демонтажі компонента
    return () => clearInterval(interval);
  }, [imageUrls.length, time]);
  return (
    <>
      {imageUrls.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Hero Image ${index + 1}`}
          fill
          className={cn(
            "object-cover mix-blend-overlay absolute transition-opacity duration-2000",
            index === currentImageIndex ? "opacity-100" : "opacity-0",
            className
          )}
        />
      ))}
    </>
  );
};
