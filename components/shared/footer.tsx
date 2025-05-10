"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Title } from "./title";
import { companyItems, supportItems } from "@/lib/fotterItems";

import DesktopLogo from "@/public/svg/LogoWhite.svg";
import IconTranslate from "@/public/svg/IconTranslate.svg";
import IconInstagram from "@/public/social/iconInstagram.svg";
import IconFacebbok from "@/public/social/iconFacebook.svg";
import IconTwitter from "@/public/social/iconTwitter.svg";
import { usePathname } from "next/navigation";
import { BLOG_CATEGORIES } from "./blog/blog-link";
import { SubscribeInput } from "./subscribe-input";
import Link from "next/link";

interface Props {
  className?: string;
}

const FOTTER_BLOG_LINKS = ["Про нас", "Інстаграм", "Фейсбук", "Твіттер"];

export const Footer: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  let lastSegment = segments[segments.length - 1];
  if (lastSegment === undefined) {
    lastSegment = "/";
  }
  const isBlogSlug =
    lastSegment ===
    BLOG_CATEGORIES.map((category) => category.id).find(
      (id) => id === lastSegment
    )
      ? true
      : false;

  return (
    <footer
      className={cn(
        "w-full",
        !isBlogSlug && "bg-primary max-w-[1728px]",
        className
      )}
    >
      {!isBlogSlug ? (
        <Container className="flex items-start justify-between flex-col container mx-auto lg:px-10 py-5 mt-10  border-1 border-amber-400">
          {/* Логотип */}
          <Image
            src={DesktopLogo}
            alt="DesktopLogo"
            className="w-30 ml-[-35px] mb-9.75 border-1 text-amber-600 "
          />

          {/* Блок з посиланнями */}
          <div className="w-full flex items-start justify-between border-1 text-amber-600">
            {/*Компанія */}
            <div className="flex flex-col">
              <Title
                text={"КОМПАНІЯ"}
                size="md"
                className="text-white font-light mb-5.5 text-left leading-[35px]"
              />
              <nav>
                <ul>
                  {companyItems.map((item) => (
                    <p
                      key={item.id}
                      className="text-white font-medium text-[25px] leading-[1.8] text-left"
                    >
                      {item.value}
                    </p>
                  ))}
                </ul>
              </nav>
            </div>

            {/*Підтримка */}
            <div className="flex flex-col pr-10">
              <Title
                text={"ПІДТРИМКА"}
                size="md"
                className="text-white font-light mb-5.5 text-left leading-[35px]"
              />
              <nav>
                <ul>
                  {supportItems.map((item) => (
                    <p
                      key={item.id}
                      className="text-white font-medium text-[25px] leading-[1.8] text-left"
                    >
                      {item.value}
                    </p>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Нижній блок */}
          <div className="w-full flex items-end justify-between mt-40">
            <p className="text-[20px] font-normal leading-[40px] text-left text-white">
              © hata Inc. Усі права захищенно.
            </p>

            <div className="flex items-end gap-2.75">
              <p className="text-[25px] font-light leading-[30px] text-left text-white mr-3.25">
                (₴) UAN
              </p>
              <Image
                src={IconTranslate}
                alt="IconTranslate"
                className="w-5.5 h-5.5 text-white"
              />
              <p className="text-[25px] font-light leading-[30px] text-left text-white mr-9.75">
                UA
              </p>

              <div className="flex items-center gap-0.5">
                <Image src={IconInstagram} alt="Instagram" />
                <Image src={IconFacebbok} alt="Facebbok" />
                <Image src={IconTwitter} alt="Twitter" />
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container className="flex items-center justify-between container mx-auto lg:px-10 py-5 mt-10  border-1 border-amber-400">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-normal text-primary-hover">hata</p>
            <p className="text-base font-medium">
              Підпишіться на нашу розсилку
            </p>
            <SubscribeInput />
          </div>
          <div className="flex gap-8.75">
            {FOTTER_BLOG_LINKS.map((item, index) => (
              <Link
                key={index}
                href={"/"}
                className="text-base font-normal text-black hover:scale-110 hover:font-medium duration-200 ease-out"
              >
                {item}
              </Link>
            ))}
          </div>
        </Container>
      )}
    </footer>
  ); 
};
