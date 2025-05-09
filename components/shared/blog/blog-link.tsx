import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  isActive?: string;
}


interface Category {
    id: string;
    name: string;
    href: string;
  }
  
  const BLOG_CATEGORIES: Category[] = [
    { id: "travel", name: "Подорожі", href: "/blog/travel" },
    { id: "design", name: "Дизайн", href: "/blog/design" },
    { id: "culture", name: "Культура", href: "/blog/culture" },
    { id: "news", name: "Новини", href: "/blog/news" },
  ];

export const BlogLink: React.FC<Props> = ({ isActive, className }) => {
  return (
    <Container className={cn("flex items-center gap-8.25", className)}>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className={cn(
            "text-[20px] font-extralight text-white hover:underline",
            isActive === category.id ? "underline" : "no-underline"
          )}
        >
          {category.name}
        </Link>
      ))}
    </Container>
  );
};
