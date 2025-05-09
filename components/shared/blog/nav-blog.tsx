'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { SearchInput } from "../search-input";
import { Title } from "../title";
import { BlogLink } from "./blog-link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const NavBlog: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(segment => segment !== "");
  const lastSegment = segments[segments.length - 1]; 

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-24 pt-9.25 pb-9.25",
        className
      )}
    >
      <div className="w-max flex-1">
        <SearchInput placeholder="Пошук блогу" isBlog={true} />
      </div>
      <Title text="Історії hata" size="lg" className="text-white" />
      <BlogLink isActive={lastSegment}/>
    </div>
  );
};
