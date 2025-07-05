import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BLOG_CATEGORIES } from "@/constans/blog-categories";

interface Props {
  className?: string;
  isActive?: string;
}

export const BlogLink: React.FC<Props> = ({ isActive, className }) => {
  return (
    <Container className={cn("flex items-center gap-8.25", className)}>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className={cn(
            "text-xl font-extralight text-white hover:underline",
            isActive === category.id ? "underline" : "no-underline"
          )}
        >
          {category.name}
        </Link>
      ))}
    </Container>
  );
};
