"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SearchInput } from "./search-input";
import { Button } from "../ui/button";

import DesktopLogo from "@/public/Logo3.png";
import { cn } from "@/lib/utils";
import { cartCityItems } from "@/lib/item/cartCityItem";

interface Props {
  className?: string;
}

export const LinkHeaderHero: React.FC<Props> = ({ className }) => {
  const [city, setCity] = useState("");

  // Знайти місто у списку
  const selectedCity = cartCityItems.find(
    (item) => item.name.toLowerCase() === city.trim().toLowerCase()
  );

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Link href="/">
        <Image
          src={DesktopLogo}
          alt="DesktopLogo"
          className="w-25 max-sm:ml-5"
        />
      </Link>

      <SearchInput
        placeholder="Виберіть місто"
        className="w-[280px] h-8 max-sm:hidden"
        marginTop="top-6"
        value={city}
        onChange={setCity}
      />

      <Button
        asChild
        className="text-[16px] font-light rounded-[41.5px] h-[33px] ml-22px max-sm:hidden"
        disabled={!selectedCity} // Заборонити перехід, якщо не знайдено
      >
        <Link href={selectedCity?.link || "#"} scroll={false}>
          Пошук
        </Link>
      </Button>
    </div>
  );
};
