import React from "react";

import DesktopLogo from "../../../public/Logo3.png";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";
import { UserNav } from "../user-nav";

interface Props {
  isSticky?: boolean;
  className?: string;
}

export const AboutHeader: React.FC<Props> = ({ isSticky, className }) => {
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

              <p className="text-2xl font-light">Довідковий центр</p>
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
