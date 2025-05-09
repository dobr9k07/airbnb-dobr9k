import { blogItems } from "@/lib/blogItem";
import React from "react";
import { CardBlog } from "./card-blog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  className?: string;
  isBlogPage?: boolean;
}

export const HeroBlog: React.FC<Props> = ({
  isBlogPage = false,
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
            {blogItems.map((item) => (
              <CardBlog key={item.id} items={item} isBlogPage={isBlogPage} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center gap-5.5 w-full border-b-1 border-black pb-16.75">
            {blogItems.slice(0, 4).map((item) => (
              <CardBlog key={item.id} items={item} isBlogPage={isBlogPage} />
            ))}
          </div>
        )}
        <Link href={"/blog"}>
          <Button className="rounded-[38px] h-17 text-xl font-light text-white leading-[24px] pl-[38px] pr-[38px]">
            {isBlogPage ? "Переглянути ще" : "Читати далі"}
          </Button>
        </Link>
      </div>
    </>
  );
};
