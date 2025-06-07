import React from "react";
import { Container } from "../container";
import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "../../../public/Logo.png";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export const BlogHeader: React.FC<Props> = ({ className }) => {
  return (
    <header className="h-[100p] bg-white">
      <Container className={className}>
        <nav className="w-full">
          <div className="flex items-center justify-between container mx-auto">
            {/* Ліва частина */}
            <Link href="/">
              <Image
                src={DesktopLogo}
                alt="DesktopLogo"
                className="w-30 mr-2 hidden lg:block"
              />
            </Link>

            {/* Права частина */}
            <Button
              className="text-[16px] font-light w-[280px] rounded-[41.5px] h-[33px] border-[0.25px]"
              variant={"outline"}
            >
              Забронювати
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
