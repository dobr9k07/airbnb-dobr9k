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
  is404?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ is404 = false, className }) => {
  const path = usePathname().slice(1);

  return (
    <header
      className={cn(
        "h-[100px]",
        path === "" ? "sticky top-0 z-100 bg-white" : ""
      )}
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
                  className="w-30 mr-2 hidden lg:block"
                />
              </Link>

              {path === "help" ? (
                <p className="text-2xl font-light text-black">
                  Довідковий центр
                </p>
              ) : (
                ""
              )}

              {path === "" || is404 ? (
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
              {path === "" ||
              path === "help" ||
              path === "about" ||
              path === "cities" ||
              path === "cities/london" ||
              path === "rooms/1" ||
              is404 ? (
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
