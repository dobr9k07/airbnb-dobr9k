import React from "react";
import { Container } from "../container";
import { SubscribeInput } from "../subscribe-input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MAXWIDTH } from "@/lib/const-css";

interface Props {
  className?: string;
}

const FOTTER_BLOG_LINKS = ["Про нас", "Інстаграм", "Фейсбук", "Твіттер"];

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
          <div className="flex gap-8.75 text-white">
            {FOTTER_BLOG_LINKS.map((item, index) => (
              <Link
                key={index}
                href={"/"}
                className="text-base font-normal hover:scale-110 hover:font-medium duration-200 ease-out"
              >
                {item}
              </Link>
            ))}
          </div>
        </Container>
      </Container>
    </footer>
  );
};
