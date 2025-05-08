import { blogItems } from "@/lib/blogItem";
import React from "react";
import { CardBlog } from "./card-blog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  className?: string;
}

export const HeroBlog: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn("flex flex-col items-center gap-10.5", className)}>
        <div className="flex justify-center gap-5.5 w-full">
          {blogItems.map((item) => (
            <CardBlog key={item.id} items={item} />
          ))}
        </div>
        <Link href={"/blog"}>
          <Button className="rounded-[38px] h-17 text-[20px] font-light text-white leading-[24px] pl-[38px] pr-[38px]">
            Читайте блог
          </Button>
        </Link>
      </div>
    </>
  );
};
