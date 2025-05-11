"use client";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "../../public/Logo.png";

import { UserNav } from "./user-nav";
import { Button } from "../ui/button";
import { SearchInput } from "./search-input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const path = usePathname().slice(1);

  return (
    <header
      className={cn(
        "h-[100px]",
        path === "" ? "sticky top-0 z-100 bg-white" : ""
      )}
    >
      <Container className={className}>
        <nav className="w-full ">
          <div className="flex items-center justify-between container mx-auto lg:px-50">
            {/* Ліва частина */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src={DesktopLogo}
                  alt="DesktopLogo"
                  className="w-30 mr-2 hidden lg:block text-amber-600 border-1 border-amber-600"
                />
              </Link>

              {path === "help" ? <p className="text-2xl font-light text-black">Довідковий центр</p> : ""}
              
              
              {path === "" ? (
                <>
                  <SearchInput placeholder="Виберіть місто" />
                  <Button className="text-[16px] font-light rounded-[41.5px] h-[33px] ml-22px">
                    Пошук
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {/* Права частина */}
              {path === "" || path === "help" ? (
                <UserNav />
              ) : (
                <Button
                  className="text-[16px] font-light w-[280px] rounded-[41.5px] h-[33px] border-[0.25px]"
                  variant={"outline"}
                >
                  Забронювати
                </Button>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
