"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
  placeholder: string;
  isBlog?: boolean;
  isHover?: boolean;
}

const citiesList = [
  {
    id: 1,
    name: "Лондон",
    link: "/cities/london",
  },
  {
    id: 2,
    name: "Дубай",
    link: "/cities/dubai",
  },
  {
    id: 3,
    name: "Монреаль",
    link: "/cities/monreal",
  },
  {
    id: 4,
    name: "Лос Анджелес",
    link: "/cities/los-angeles",
  },
  {
    id: 5,
    name: "Нью Йорк",
    link: "/cities/new-york",
  },
];

const SearchInput: React.FC<Props> = ({
  placeholder,
  isBlog = false,
  isHover = false,
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
    setСities(citiesList);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-30 flex items-center px-5 rounded-full group",
        "hover:cursor-pointer focus-within:ring-2 focus-within:bg-primary",
        isBlog ? "bg-transparent" : "bg-[#E0E0E0]",
        isHover && "hover:bg-primary",
        className
      )}
    >
      {isBlog ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="mr-3 text-white group-black:text-white"
        >
          <circle cx="12.8335" cy="12.8333" r="7" stroke="currentColor" />
          <path
            d="M23.3335 23.3333L19.8335 19.8333"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className={cn(
            "mr-3",
            isHover
              ? "text-black group-hover:text-white"
              : "text-black group-focus-within:text-white"
          )}
        >
          <circle cx="12.8335" cy="12.8333" r="7" stroke="currentColor" />
          <path
            d="M23.3335 23.3333L19.8335 19.8333"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Поле вводу */}
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          " w-full bg-transparent outline-none text-white focus-within:placeholder-white focus-within:text-white",
          isBlog
            ? "text-white text-xl font-light placeholder:white"
            : "text-black text-base font-light placeholder:black",
          isHover && "text-xl font-light group-hover:placeholder-white"
        )}
        onFocus={() => setFocused(true)}
      />

      {/* Випадаючий список міст */}
      {cities.length > 0 && (
        <div
          className={cn(
            "absolute left-0 w-full bg-white rounded-[20px] py-2 shadow-md transition-all duration-200 z-30",
            focused
              ? "visible opacity-100 top-14"
              : "invisible opacity-0 top-12"
          )}
        >
          {cities.map((city) => (
            // <Link key={city.id} href={city.link} onClick={onClickItem}>
            <Link key={city.id} href={"#"} onClick={onClickItem}>
              <div className="mx-3 px-3 py-2 rounded-[21px] cursor-pointer text-sm font-light transition-all duration-100 hover:bg-primary hover:text-white">
                {city.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchInputHelp: React.FC<Props> = ({ placeholder, className }) => {
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
      {focused && <div className="fixed inset-0 z-30" />}
      <div
        ref={ref}
        className={cn(
          "relative z-30 flex items-center rounded-full bg-[#E0E0E0] px-5",
          "hover:cursor-pointer focus-within:ring-2 focus-within:ring-blue-500",
          className
        )}
      >
        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          className="w-full bg-transparent outline-none text-xl font-normal placeholder-black placeholder:pl-8"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 28 28"
          fill="none"
          className="mr-3 text-black"
          onClick={() => setFocused(true)}
        >
          <circle cx="12.8335" cy="12.8333" r="7" stroke="currentColor" />
          <path
            d="M23.3335 23.3333L19.8335 19.8333"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>

        {cities.length > 0 && (
          <div
            className={cn(
              "absolute left-0 w-full bg-white rounded-[20px] py-2 shadow-md transition-all duration-200 z-30",
              focused
                ? "visible opacity-100 top-14"
                : "invisible opacity-0 top-12"
            )}
          >
            {cities.map((city) => (
              <Link key={city.id} href={city.link} onClick={onClickItem}>
                <div className="ml-3 pl-3 py-2 rounded-[21px] w-[calc(100%-148px)] cursor-pointer text-sm font-light transition-all duration-100 hover:bg-primary hover:text-white">
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

const SearchSecondInput: React.FC<Props> = ({ placeholder, className }) => {
  const [focused, setFocused] = React.useState(false);
  const [cities, setСities] = React.useState(citiesList);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setFocused(false);
    setСities(citiesList);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex items-center px-5 rounded-full border border-black group",
        "hover:cursor-pointer hover:bg-[#E0E0E0]  focus-within:bg-[#E0E0E0] transition-all duration-200",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={cn("mr-3 text-black group-focus-within:text-white")}
      >
        <circle cx="12.8335" cy="12.8333" r="7" stroke="currentColor" />
        <path
          d="M23.3335 23.3333L19.8335 19.8333"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>

      {/* Поле вводу */}
      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "w-full text-base font-light bg-transparent outline-none text-black hover:cursor-pointer"
        )}
        onFocus={() => setFocused(true)}
      />

      {/* Випадаючий список міст */}
      {cities.length > 0 && (
        <div
          className={cn(
            "absolute left-0 w-full bg-white rounded-[20px] py-2 shadow-md transition-all duration-200 z-30",
            focused
              ? "visible opacity-100 top-14"
              : "invisible opacity-0 top-12"
          )}
        >
          {cities.map((city) => (
            // <Link key={city.id} href={city.link} onClick={onClickItem}>
            <Link key={city.id} href={"#"} onClick={onClickItem}>
              <div className="mx-3 px-3 py-2 rounded-[21px] cursor-pointer text-sm font-light transition-all duration-100 hover:bg-[#E0E0E0] hover:text-white">
                {city.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export { SearchInput, SearchInputHelp, SearchSecondInput };
