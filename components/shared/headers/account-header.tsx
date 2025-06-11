import React from "react";

import DesktopLogo from "../../../public/Logo3.png";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "../search-input";
import { Button } from "@/components/ui/button";
import { UserNav } from "../user-nav";

interface Props {
  isSticky?: boolean;
  className?: string;
}

export const AccountHeader: React.FC<Props> = ({ isSticky, className }) => {
  return (
    <header
      className={cn("h-[110px]", isSticky ? "sticky top-0 z-100 bg-white" : "")}
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

              <SearchInput placeholder="Виберіть місто" />
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
