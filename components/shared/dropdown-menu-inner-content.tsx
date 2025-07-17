"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { IContent, ILanguage, ILink } from "./user-nav";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface PropsPrimary {
  menuItems: (IContent & ILink)[];
  srcImage: StaticImageData;
  className?: string;
}

interface PropsSecondary {
  title: string;
  menuItems: ILanguage[];
  srcImage: StaticImageData;
  isCurency?: boolean;
  className?: string;
}

// Функція для витягування контенту з круглих дужок
function extractFromParentheses(input: string): string | null {
  const match = input.match(/\(([^)]+)\)/);
  return match ? match[1] : null;
}

const DropdownMenuPrimaryInnerContent: React.FC<PropsPrimary> = ({
  menuItems,
  srcImage,
  className,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-[21px] h-10.5 w-16.5 flex items-center justify-center cursor-pointer hover:bg-primary-white hover:transition-all duration-300">
          <Image src={srcImage} alt="Logo" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn("w-[300px] z-1000", className)}
      >
        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem asChild key={item.id} className="cursor-pointer">
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropdownMenuSecondaryInnerContent: React.FC<PropsSecondary> = ({
  title,
  menuItems,
  srcImage,
  isCurency = false,
  className,
}) => {
  const [cuts, setSucts] = React.useState(menuItems[0].cuts);
  const [curency, setCurency] = React.useState(
    extractFromParentheses(menuItems[0].country)
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-[21px] h-10.5 w-31 flex items-center justify-center gap-3.75 cursor-pointer hover:bg-primary-white hover:transition-all duration-300">
          {isCurency ? (
            <p className="text-[25px] font-light">{curency}</p>
          ) : (
            <Image src={srcImage} alt="Logo" width={22} height={22} />
          )}
          <p className="text-[25px] font-light">{cuts}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn("w-[300px] z-1000", className)}
      >
        <DropdownMenuLabel className="pl-[30px]">{title}</DropdownMenuLabel>
        <DropdownMenuGroup className="grid grid-cols-2 ">
          {menuItems.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="cursor-pointer pl-[65px] font-extralight"
              onClick={() => {
                setCurency(extractFromParentheses(item.country));
                setSucts(item.cuts);
              }}
            >
              <div className="flex flex-col">
                <p>{item.language}</p>
                <p>{item.country}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DropdownMenuPrimaryInnerContent, DropdownMenuSecondaryInnerContent };
