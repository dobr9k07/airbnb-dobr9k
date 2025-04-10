import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "../../public/airbnb-desktop.png";
import { UserNav } from "./user-nav";
import { ToggleGroupHeader } from "./toggle-group-header";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn(" border-b", className)}>
      <Container>
        <nav className="w-full border-b">
          <div className="flex items-center  justify-between container mx-auto px-1 lg:px-10 py-5">
            {/* Ліва частина */}
            <Link href="/">
              <div className="flex items-center gap-4">
                <Image
                  src={DesktopLogo}
                  alt="DesktopLogo"
                  className="w-32 hidden lg:block"
                />
              </div>
            </Link>

            <div className="flex justify-end items-center w-[500px]">
              <ToggleGroupHeader />
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant={"ghost"}
                className="rounded-full cursor-pointer text-sm"
              >
                Запропонувати помешкання на Airbnb
              </Button>
              {/* Права частина */}
              <UserNav />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
