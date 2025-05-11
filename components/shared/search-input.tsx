"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useClickAway } from "react-use";

import searchLight from "@/public/svg/Search_Light.svg";
import searchBlack from "@/public/svg/Search_Black.svg";

interface Props {
  className?: string;
  placeholder: string;
  isBlog?: boolean;
}

const citiesList = [
  {
    id: 1,
    name: "Лондон",
  },
  {
    id: 2,
    name: "Дубай",
  },
  {
    id: 3,
    name: "Монреаль",
  },
  {
    id: 4,
    name: "Анджелес",
  },
  {
    id: 5,
    name: "Йорк",
  },
];

export const SearchInput: React.FC<Props> = ({
  placeholder,
  isBlog = false,
  className,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [cities, setСities] = React.useState(citiesList);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setFocused(false);
    setСities([]);
  };
  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 z-30" />}
      <div
        ref={ref}
        className={cn(
          "flex rounded-[41.5px] flex-1 justify-between relative w-70 h-8.25 z-30 p-[0.25px]  hover:cursor-pointer hover:bg-[#E0E0E0]",
          isBlog ? "" : "border-[0.25px] border-black",
          className
        )}
      >
        {isBlog ? (
          <Image
            src={searchLight}
            alt={"search-light"}
            width={14}
            height={14}
            className="absolute top-1/2 translate-y-[-50%] left-3 h-7 w-7"
          />
        ) : (
          <Image
            src={searchBlack}
            alt={"search-black"}
            width={14}
            height={14}
            className="absolute top-1/2 translate-y-[-50%] left-3 h-7 w-7"
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full font-light pl-[67px]",
            isBlog ? "text-white text-[20px]" : "text-black text-[16px]",
          )}
          onFocus={() => setFocused(true)}
        />

        {cities.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-[20px] py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30 ",
              focused && "visible opacity-100 top-12"
            )}
          >
            {cities.map((city) => (
              <Link key={city.id} href={"#"} onClick={onClickItem}>
                <div className="ml-3 pl-3 p-0.75 rounded-[21px] w-[calc(100%-148px)] cursor-pointer text-[16px] font-light transition-all duration-100 hover:bg-primary hover:text-white">
                  {city.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
