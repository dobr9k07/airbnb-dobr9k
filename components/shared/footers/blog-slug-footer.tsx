import React from "react";
import { Container } from "../container";
import { SubscribeInput } from "../subscribe-input";
import { FooterLinks } from "../footer-links";

interface Props {
  className?: string;
}

export const BlogSlugFooter: React.FC<Props> = ({}) => {
  return (
    <footer>
      <Container className="flex items-center justify-between container mx-auto py-5 mt-10">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-normal text-primary-hover">hata</p>
          <p className="text-base font-medium">Підпишіться на нашу розсилку</p>
          <SubscribeInput className="border-b-black focus-visible:text-black placeholder:text-black text-black" />
        </div>
        <FooterLinks className="text-black" />
      </Container>
    </footer>
  );
};
