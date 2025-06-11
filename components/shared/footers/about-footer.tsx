import { MAXWIDTH } from "@/lib/const-css";
import React from "react";
import { Container } from "../container";
import Image from "next/image";
import { Title } from "../title";
import { companyItems, supportItems } from "@/lib/fotterItems";
import Link from "next/link";

import DesktopLogo from "@/public/svg/LogoWhite.svg";
import IconInstagram from "@/public/social/iconInstagram.svg";
import IconFacebbok from "@/public/social/iconFacebook.svg";
import IconTwitter from "@/public/social/iconTwitter.svg";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}

export const AboutFooter: React.FC<Props> = ({ className }) => {
  return (
    <footer className={` ${MAXWIDTH} bg-primary mx-auto`}>
      <Container
        className={cn(
          "flex items-start justify-between flex-col container lg:px-10 py-5 mt-10",
          className
        )}
      >
        {/* Логотип */}
        <Image
          src={DesktopLogo}
          alt="DesktopLogo"
          className="w-30 ml-[-35px] mb-9.75"
        />

        {/* Блок з посиланнями */}
        <div className="w-full flex items-start justify-between">
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
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      key={item.id}
                      className="text-white font-medium text-[25px] leading-[1.8] text-left"
                    >
                      {item.value}
                    </Link>
                  </li>
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

            <ul>
              {supportItems.map((item) => (
                <li key={item.id}>
                  <Link
                    key={item.id}
                    href={item.link}
                    className="text-white font-medium text-[25px] leading-[1.8] text-left"
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижній блок */}
        <div className="w-full flex items-end justify-between mt-40">
          <p className="text-[20px] font-normal leading-[40px] text-left text-white">
            © hata Inc. Усі права захищенно.
          </p>

          <div className="flex items-end gap-2.75">
            <div className="flex items-center gap-0.5">
              <Image src={IconInstagram} alt="Instagram" />
              <Image src={IconFacebbok} alt="Facebbok" />
              <Image src={IconTwitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
