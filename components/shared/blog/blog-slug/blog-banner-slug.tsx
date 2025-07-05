import { IBlogItem } from "@/lib/item/blogItem";
import React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { Container } from "../../container";
import { Title } from "../../title";

import IconClock from "@/public/svg/IconClockWhite.svg";
import IconTag from "@/public/svg/IconTagWhite.svg";

interface Props {
  className?: string;
  item: IBlogItem;
}
export const BlogBannerSlug: React.FC<Props> = ({ item, className }) => {
  return (
    <Container
      className={cn(
        "flex flex-col items-center justify-center gap-2.5 text-[#FFFFFF]",
        className
      )}
    >
      <p className="text-[28px] font-medium">{item.tag}</p>
      <Title text={item.title} size="2lg" className="font-bold" />
      <p className="text-[32px] font-light">{item.date}</p>
      <div className="flex items-center justify-center gap-7">
        <Image src={IconClock} alt="clock" width={50} height={50} />

        <p className="text-[32px] font-light">{item.time_read}</p>
      </div>
      <div className="flex items-center justify-center gap-7">
        <Image src={IconTag} alt="tag" width={50} height={50} />
        <div className="flex items-center justify-center text-[32px] font-light gap-2">
          <p>Теги: </p>
          <p className="underline underline-offset-6">{item.tag_link}</p>
        </div>
      </div>

      {item.imageBannerXL && (
        <div className="relative w-full h-[700px]">
          <Image
            src={item.imageBannerXL}
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      )}
    </Container>
  );
};
