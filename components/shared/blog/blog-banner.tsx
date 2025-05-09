import { IBlogItem } from "@/lib/blogItem";
import Image from "next/image";
import React from "react";
import { Title } from "../title";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  item: IBlogItem;
}

export const BlogBanner: React.FC<Props> = ({ item, className }) => {
  return (
    <div className="relative max-w-[705px] max-h-[705px] min-w-[500] min-h-[500px] mx-auto">
    <Image
      src={item.imageBanner}
      alt="Banner"
      fill
      className="object-cover mb-[126px]"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center card-blog-banner w-[474px]">
        <p className="text-xl font-extralight pt-4.25">Культура</p>
        <Title text={item.title} size="md" className="text-black pl-23.5 pr-23.5" />
        <Link href={"#"}>
          <Button
            className="text-left text-[16px] font-extralight text-black underline pb-12"
            variant={"link"}
          >
            Читайте далі
          </Button>
        </Link>
      </div>
    </div>
  </div>
  );
};
