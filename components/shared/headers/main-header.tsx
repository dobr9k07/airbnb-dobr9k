import React from "react";
import { Container } from "../container";
import { UserNav } from "../user-nav";
import { cn } from "@/lib/utils";
import { LinkHeaderHero } from "../link-header-hero";
import { NavigationSheet } from "../navigation-sheet";

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
      className={cn("h-[120px]", isSticky ? "sticky top-0 z-100 bg-white" : "")}
    >
      <Container className={className}>
        <nav className="w-full">
          <div className="flex items-center justify-between container mx-auto">
            {/* Ліва частина */}
            <LinkHeaderHero />

            <div className="flex items-center gap-1.5 max-sm:hidden">
              {/* Права частина */}
              <UserNav />
            </div>
            {/* Mobile Menu */}
            <div className="sm:hidden">
              <NavigationSheet />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
