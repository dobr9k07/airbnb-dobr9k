"use client";
import { cn } from "@/lib/utils";
import { useCategoryNav } from "@/store/category";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  className?: string;
}

type NavItem = { id: number; title: string };

const nav: NavItem[] = [
  {
    id: 1,
    title: "Огляд",
  },
  {
    id: 2,
    title: "Наявність і тарифи",
  },
  {
    id: 3,
    title: "Зручності",
  },
  {
    id: 4,
    title: "Відгуки",
  },
  {
    id: 5,
    title: "Політика бронювання",
  },
];

export const NavRoom: React.FC<Props> = ({ className }) => {
  const activeId = useCategoryNav((state) => state.activeId);
  const path = usePathname();
  console.log(path);

  const handleScroll = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <ul className="flex items-start gap-8 pt-[27px] pb-[27px]">
        {nav.map((item) => (
          <li key={item.id}>
            <a
              className={cn(
                "text-lg font-normal cursor-pointer transition-all duration-200 ease-in-out hover:text-xl",
                activeId === item.id ? "text-black text-xl" : "text-[#767676]"
              )}
              onClick={() => handleScroll(item.title)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
