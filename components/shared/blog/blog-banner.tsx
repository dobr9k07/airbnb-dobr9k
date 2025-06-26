import { IBlogItem } from "@/lib/blogItem";
import React from "react";
import { BlogBannerHero } from "./blog-banner-hero";
import { BlogBannerSlug } from "./blog-slug";


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
    <BlogBannerHero item={item} />
  );
};
