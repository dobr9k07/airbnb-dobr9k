import { MAXWIDTH } from "@/constans/const-css";
import React from "react";
import { Container } from "../container";
import Image from "next/image";
import { Title } from "../title";
import { companyItems, supportItems } from "@/lib/item/fotterItems";
import Link from "next/link";

import DesktopLogo from "@/public/svg/LogoWhite.svg";
import { cn } from "@/lib/utils";
import { SocialLinks } from "../social-links";

interface Props {
  className?: string;
}

export const MainFooter: React.FC<Props> = ({ className }) => {
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
          className="w-30 mb-9.75 sm:pl-[-35px] max-sm:mb-3"
        />

        {/* Блок з посиланнями */}
        <div className="w-full flex items-start justify-between ">
          {/*Компанія */}
          <div className="flex flex-col max-sm:pl-[35px]">
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
                      className="text-white font-medium text-[25px] leading-[1.8] text-left max-sm:text-sm max-sm:font-light"
                    >
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/*Підтримка */}
          <div className="flex flex-col pr-10 max-sm:hidden">
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

        {/*Підтримка моб*/}
        <div className="flex flex-col pr-10 sm:hidden max-sm:pl-[35px] max-sm:mt-4">
          <Title
            text={"ПІДТРИМКА"}
            size="xs"
            className="text-white font-light mb-5.5 text-left leading-[35px] max-sm:font-normal max-sm:mb-0"
          />

          <ul>
            {supportItems.slice(0, 1).map((item) => (
              <li key={item.id}>
                <Link
                  key={item.id}
                  href={item.link}
                  className="text-white font-medium text-[25px] leading-[1.8] text-left max-sm:text-sm max-sm:font-light"
                >
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Нижній блок */}
        <div className="w-full flex justify-between items-end mt-40 sm:items-end max-sm:flex-col max-sm:hidden">
          <p className="text-[20px] font-normal leading-[40px] text-left text-white">
            © hata Inc. Усі права захищенно.
          </p>

          <div className="flex items-end gap-2.75">
            <SocialLinks />
          </div>
        </div>

        {/* Нижній блок моб*/}
        <div className="flex justify-between flex-col sm:hidden pl-[35px] mt-5">
          <div className="flex items-end gap-2.75">
            <SocialLinks />
          </div>
          <p className="text-xl font-normal text-left text-white mt-2.5 w-full 0">
            © hata Inc. Усі права захищенно.
          </p>
        </div>
      </Container>
    </footer>
  );
};
