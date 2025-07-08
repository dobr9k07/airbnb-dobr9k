"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useClickAway, useDebounce } from "react-use";
import { SearchIcon } from "./svg-components";
import { cartCityItems } from "@/lib/item/cartCityItem";
import { blogItems } from "@/lib/item/blogItem";
import { generateBlogPathLink } from "@/lib/generate-Blog-PathLink";

interface Props {
  className?: string;
  placeholder: string;
  isBlog?: boolean;
  isHover?: boolean;
}

interface SearchInputProps extends Props {
  value: string;
  marginTop: string;
  onChange: (value: string) => void;
  onSelect?: (city: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  marginTop,
  onChange,
  onSelect,
  placeholder,
  isBlog = false,
  isHover = false,
  className,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [cities, setСities] = React.useState(cartCityItems);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      if (!value || value.trim() === "") {
        setСities(cartCityItems);
      } else {
        const filteredCities = cartCityItems.filter((city) =>
          city.name.toLowerCase().includes(value.toLowerCase())
        );
        setСities(filteredCities);
      }
    },
    250,
    [value]
  );

  const onClickItem = (city: string) => {
    onChange(city);
    setFocused(false);
    setСities(cartCityItems);
    onSelect?.(city);
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
      <SearchIcon
        width={28}
        height={28}
        className={cn(
          isHover
            ? "text-black group-hover:text-white"
            : "text-black group-focus-within:text-white"
        )}
        onClick={() => setFocused(true)}
      />

      {/* Поле вводу */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full bg-transparent outline-none text-black text-base  focus-within:placeholder-white focus-within:text-white",
          isHover && "text-xl font-light group-hover:placeholder-white"
        )}
        onFocus={() => setFocused(true)}
      />

      {/* Випадаючий список міст */}
      {cities.length > 0 && (
        <div
          className={cn(
            "custom-scroll overflow-y-auto max-h-[200px] absolute left-0 w-full bg-white rounded-[20px] mt-4 shadow-md transition-all duration-300 z-30",
            focused ? "visible opacity-100" : "invisible opacity-0",
            marginTop
          )}
        >
          {cities.map((city) => (
            <div
              key={city.id}
              onClick={() => onClickItem(city.name)}
              className="m-3 px-3 py-2 rounded-[21px] cursor-pointer text-sm font-light transition-all duration-100 hover:bg-primary hover:text-white"
            >
              {city.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchInputBlog: React.FC<Props> = ({
  placeholder,
  isBlog = false,
  isHover = false,
  className,
}) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [blogs, setBlogs] = React.useState(blogItems);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      if (searchQuery.trim() === "") {
        setBlogs(blogItems);
      } else {
        const filteredCities = blogItems.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setBlogs(filteredCities);
      }
    },
    250,
    [searchQuery]
  );

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
        <SearchIcon
          width={28}
          height={28}
          className="text-white group-black:text-white"
        />
      ) : (
        <SearchIcon
          width={28}
          height={28}
          className={cn(
            isHover
              ? "text-black group-hover:text-white"
              : "text-black group-focus-within:text-white"
          )}
        />
      )}

      {/* Поле вводу */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
      {blogs.length > 0 && (
        <div
          className={cn(
            "custom-scroll overflow-y-auto max-h-[200px] absolute left-0 w-full bg-white rounded-[20px] mt-4 shadow-md transition-all duration-200 z-30",
            focused ? "visible opacity-100 top-6" : "invisible opacity-0 top-6"
          )}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="m-3 px-3 py-2 rounded-[21px] cursor-pointer text-sm font-light transition-all duration-100 hover:bg-primary hover:text-white"
            >
              <Link href={generateBlogPathLink(blog.id, blog.tag)}>
                {blog.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchInputHelp: React.FC<Props> = ({ placeholder, className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

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

        <SearchIcon
          width={36}
          height={36}
          className="text-black"
          onClick={() => setFocused(true)}
        />
      </div>
    </>
  );
};

const SearchSecondInput: React.FC<Props> = ({ placeholder, className }) => {
  const [focused, setFocused] = React.useState(false);
  const [cities, setСities] = React.useState(cartCityItems);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setFocused(false);
    setСities(cartCityItems);
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
      <SearchIcon
        width={28}
        height={28}
        className=" text-black group-focus-within:text-white"
      />

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

export { SearchInput, SearchInputBlog, SearchInputHelp, SearchSecondInput };
