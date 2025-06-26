import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const FOTTER_BLOG_LINKS = ["Про нас", "Інстаграм", "Фейсбук", "Твіттер"];

export const FooterLinks: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex gap-8.75">
      {FOTTER_BLOG_LINKS.map((item, index) => (
        <Link
          key={index}
          href={"/"}
          className={cn(
            "text-base font-normal hover:scale-110 hover:font-medium duration-200 ease-out",
            className
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
