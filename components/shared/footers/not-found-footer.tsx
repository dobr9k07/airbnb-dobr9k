import React from "react";
import { Container } from "../container";
import { SubscribeInput } from "../subscribe-input";
import { cn } from "@/lib/utils";
import { MAXWIDTH } from "@/constans/const-css";
import { FooterLinks } from "../footer-links";

interface Props {
  className?: string;
}

export const NotFoundFooter: React.FC<Props> = ({ className }) => {
  return (
    <footer>
      <Container className={cn("bg-primary", MAXWIDTH, className)}>
        <Container className="flex items-center justify-between container mx-auto py-5 mt-10">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-normal text-[#FFFBE8]">hata</p>
            <p className="text-base font-medium text-white">
              Підпишіться на нашу розсилку
            </p>
            <SubscribeInput />
          </div>
          <FooterLinks className="text-white" />
        </Container>
      </Container>
    </footer>
  );
};
