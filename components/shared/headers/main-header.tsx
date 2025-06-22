import React from "react";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "../../../public/Logo3.png";

import { Button } from "@/components/ui/button";
import { UserNav } from "../user-nav";
import { cn } from "@/lib/utils";
import { SearchInput } from "../search-input";

interface Props {
  isSticky?: boolean;
  className?: string;
}

export const MainHeader: React.FC<Props> = ({
  isSticky = false,
  className,
}) => {
  return (
    <header
      className={cn(
        "h-[110px] mb-5",
        isSticky ? "sticky top-0 z-100 bg-white" : ""
      )}
    >
      <Container className={className}>
        <nav className="w-full ">
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
                className="w-[280px] h-8"
              />

              <Button className="text-[16px] font-light rounded-[41.5px] h-[33px] ml-22px">
                Пошук
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
