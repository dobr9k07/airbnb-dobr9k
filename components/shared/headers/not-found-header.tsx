'use client';
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "../search-input";
import { Button } from "@/components/ui/button";
import { UserNav } from "../user-nav";

import DesktopLogo from "../../../public/Logo3.png";
import { cartCityItems } from "@/lib/item/cartCityItem";

interface Props {
  isSticky?: boolean;
  className?: string;
}

export const NotFoundHeader: React.FC<Props> = ({
  isSticky = false,
  className,
}) => {
  const [city, setCity] = useState("");

  // Знайти місто у списку
  const selectedCity = cartCityItems.find(
    (item) => item.name.toLowerCase() === city.trim().toLowerCase()
  );
  return (
    <header
      className={cn("h-[120px]", isSticky ? "sticky top-0 z-100 bg-white" : "")}
    >
      <Container className={className}>
        <nav className="w-full">
          <div className="flex items-center justify-between container mx-auto">
            {/* Ліва частина */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src={DesktopLogo}
                  alt="DesktopLogo"
                  className="w-25 hidden lg:block"
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

            <div className="flex items-center gap-1.5">
              {/* Права частина */}
              <UserNav />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
