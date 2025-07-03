import { IBlogItem } from "@/lib/blogItem";
import React from "react";
import { CardBlog } from "./card-blog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  className?: string;
  items: IBlogItem[];
  isBlogPage?: boolean;
  isActiveButton?: boolean;
}

export const HeroBlog: React.FC<Props> = ({
  items,
  isBlogPage = false,
  isActiveButton = true,
  className,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center gap-6.25",
          isBlogPage && "flex-wrap ",
          className
        )}
      >
        {isBlogPage ? (
          <div className="flex justify-center flex-wrap gap-x-7.5 gap-y-16.5 w-full border-b border-black pb-16.75">
            {items.slice(0, 6).map((item) => (
              <CardBlog key={item.id} items={item} isBlogPage={isBlogPage} />
            ))}
          </div>
        ) : (
          <div
            className={cn(
              "flex justify-center gap-5.5 w-full",
              isBlogPage && "border-b-1 border-black pb-16.75"
            )}
          >
            {items.slice(0, 4).map((item) => (
              <CardBlog key={item.id} items={item} isBlogPage={isBlogPage} />
            ))}
          </div>
        )}
        {isActiveButton && (
          <Button
            asChild
            className="rounded-[38px] h-17 text-xl font-light text-white leading-[24px] pl-[38px] pr-[38px]"
          >
            <Link href={"/blog"}>
              {isBlogPage ? "Переглянути ще" : "Читати далі"}
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};
