import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../container";
import { UserNav } from "../user-nav";
import { LinkHeaderHero } from "../link-header-hero";

interface Props {
  isSticky?: boolean;
  className?: string;
}

export const AuthHeader: React.FC<Props> = ({
  isSticky = false,
  className,
}) => {
  return (
    <header
      className={cn("h-[120px]", isSticky ? "sticky top-0 z-100 bg-white" : "")}
    >
      <Container className={className}>
        <nav className="w-full ">
          <div className="flex items-center justify-between container mx-auto">
            {/* Ліва частина */}
            <LinkHeaderHero />

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
