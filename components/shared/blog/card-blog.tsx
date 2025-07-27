import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IBlogItem } from "@/lib/item/blogItem";
import { cn } from "@/lib/utils";
import { generateBlogPathLink } from "@/lib/generate-Blog-PathLink";

interface Props {
  className?: string;
  items: IBlogItem;
  isBlogPage?: boolean;
}

export const CardBlog: React.FC<Props> = ({ items, isBlogPage }) => {
  const pathLink = generateBlogPathLink(items.id, items.tag);

  return (
    <Card
      className={cn(
        "w-full flex flex-col border-none shadow-none gap-3 p-0 m-0",
        isBlogPage
          ? "max-w-[385px] text-center"
          : "max-w-[286px] max-sm:max-w-[420px]"
      )}
    >
      <div className="w-full aspect-square relative">
        <Image
          src={items.imageUrl}
          alt="Product"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-0">
        {isBlogPage && (
          <p className="text-xl font-semibold text-black">{items.tag}</p>
        )}
        <CardTitle className="text-2xl font-light text-black max-sm:font-medium">
          {items.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-base font-extralight text-black max-sm:hidden">
          {items.description}
        </p>
      </CardContent>
      <div className="flex-grow"></div>
      <CardFooter className={cn("p-0", isBlogPage && "flex justify-center")}>
        <Button
          asChild
          className={cn(
            "text-black p-0",
            isBlogPage ? "text-base font-extralight" : "text-[25px] font-normal"
          )}
          variant={"link"}
        >
          <Link href={pathLink}>Читайте далі</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
