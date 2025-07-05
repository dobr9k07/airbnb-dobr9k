"use client";
import { useCategoryIntersection } from "@/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { RefObject } from "react";

interface Props {
  title: string;
  categoryId: number;
  imageUrl: string[];
}

const gridPositions2 = [
  "row-start-1 row-end-3 col-start-1 col-end-3",
  "row-start-1 row-end-2 col-start-3 col-end-4",
  "row-start-2 row-end-3 col-start-3 col-end-4",
];

interface IimgSizes {
  w: number;
  h: number;
}

interface ISizes {
  [key: number]: IimgSizes;
}

const imgSizes: ISizes = {
  0: { w: 887, h: 713 },
  1: { w: 489, h: 338 },
  2: { w: 489, h: 338 },
};

export const DescriptionImageBlock: React.FC<Props> = ({
  title,
  categoryId,
  imageUrl,
}) => {
  const ref = useCategoryIntersection(categoryId);

  return (
    <section
      className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-4.5 mt-2.75 container"
      ref={ref as RefObject<HTMLDivElement>}
      id={title}
    >
      {imageUrl.map((imageUrl, index) => (
        <div key={imageUrl} className={cn("flex", gridPositions2[index])}>
          <Image
            src={imageUrl}
            alt="room"
            width={imgSizes[index].w}
            height={imgSizes[index].h}
            className="object-cover flex-1"
          />
        </div>
      ))}
    </section>
  );
};
