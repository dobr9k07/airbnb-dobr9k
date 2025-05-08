import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IBlogItem } from "@/lib/blogItem";

interface Props {
  className?: string;
  items: IBlogItem;
}

export const CardBlog: React.FC<Props> = ({ items, className }) => {
  return (
    <Card className="w-full max-w-[286px] border-none shadow-none gap-3 p-0">
      <div className="w-full aspect-square relative">
        <Image
          src={items.imageUrl}
          alt="Product"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-0">
        <CardTitle className="text-[25px] font-light text-black">
          {items.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Link href={"#"}>
          <Button
            className="text-left text-[25px] font-normal text-black p-0 "
            variant={"link"}
          >
            Читайте далі
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
