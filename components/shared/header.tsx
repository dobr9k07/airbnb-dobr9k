import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "../../public/Logo.png";
import { UserNav } from "./user-nav";
import { Button } from "../ui/button";
import { SearchInput } from "./search-input";

interface Props {
  isHomePage?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ isHomePage = true, className }) => {
  return (
    <header>
      <Container className={cn("sticky top-0 z-100", className)}>
        <nav className="w-full ">
          <div className="flex items-center justify-between container mx-auto lg:px-50">
            {/* Ліва частина */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src={DesktopLogo}
                  alt="DesktopLogo"
                  className="w-30 mr-2 hidden lg:block text-amber-600"
                />
              </Link>

              <SearchInput />

              <Button className="text-[16px] font-light rounded-[41.5px] h-[33px] ml-22px">
                Пошук
              </Button>
            </div>

            {isHomePage ? (
              <>
                <div className="flex items-center gap-1.5">
                  {/* Права частина */}
                  <UserNav />
                </div>
              </>
            ) : (
              <Button
                size={"lg"}
                className="rounded-full text-[16px] font-medium pl-4 pr-4"
              >
                Airbnb старт
              </Button>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
