import { IBlogItem } from "@/lib/item/blogItem";
import React from "react";
import { BlogBannerSlug } from "./blog-slug";
import { BlogBannerCarousel } from "../blog-banner-carousel";

interface Props {
  className?: string;
  item: IBlogItem;
  isBlogSlug?: boolean;
}

export const BlogBanner: React.FC<Props> = ({
  item,
  isBlogSlug = false,
  className,
}) => {
  return isBlogSlug ? (
    <BlogBannerSlug item={item} className={className} />
  ) : (
    <BlogBannerCarousel />
  );
};
