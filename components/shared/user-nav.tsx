"use client";

import React from "react";

import UserDropDown from "../../public/User_alt_light.png";
import MenuDropDown from "../../public/Variant2.png";
import LanguageDropDown from "../../public/Language.png";

import {
  DropdownMenuPrimaryInnerContent,
  DropdownMenuSecondaryInnerContent,
} from "./dropdown-menu-inner-content";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export interface IContent {
  id: number;
  title: string;
}

export interface ILink {
  href: string;
}

export interface ILanguage {
  id: number;
  language: string;
  country: string;
  cuts: string;
}

const dropdownBurger: (IContent & ILink)[] = [
  {
    id: 1,
    title: "Повідомлення",
    href: "#",
  },
  {
    id: 2,
    title: "Налаштування акаунта та повідмлень",
    href: "#",
  },
  {
    id: 3,
    title: "Запропонувати помешкання на hata",
    href: "#",
  },
  {
    id: 4,
    title: "Подорожі",
    href: "#",
  },
  {
    id: 5,
    title: "Обране",
    href: "#",
  },
];

const dropdownUser: (IContent & ILink)[] = [
  {
    id: 6,
    title: "Увійти",
    href: "/auth/login",
  },
  {
    id: 7,
    title: "Зареєструватися",
    href: "/auth/register",
  },
  {
    id: 8,
    title: "Про нас ",
    href: "/about",
  },
  {
    id: 9,
    title: "Підтримка",
    href: "/help",
  },
];

const dropdownLanguage: ILanguage[] = [
  {
    id: 10,
    language: "Українська",
    country: "Україна",
    cuts: "UA",
  },
  {
    id: 11,
    language: "русский",
    country: "error",
    cuts: "error",
  },
  {
    id: 12,
    language: "English",
    country: "United States",
    cuts: "US",
  },
  {
    id: 13,
    language: "English",
    country: "United Kingdom",
    cuts: "UK",
  },
  {
    id: 14,
    language: "Polski",
    country: "Polska",
    cuts: "PL",
  },
  {
    id: 15,
    language: "Français",
    country: "France",
    cuts: "FR",
  },
];

const dropdownCurency: ILanguage[] = [
  {
    id: 16,
    language: "Українська гривня",
    country: "UAN - (₴)",
    cuts: "UAN",
  },
  {
    id: 17,
    language: "Євро",
    country: "EUR - (€)",
    cuts: "EUR",
  },
  {
    id: 18,
    language: "Американський долар",
    country: "USD - ($)",
    cuts: "USD",
  },
  {
    id: 19,
    language: "Польський злотий",
    country: "PLN - (zł)",
    cuts: "PLN",
  },
  {
    id: 20,
    language: "Єгипетський фунт",
    country: "EGP - (E£)",
    cuts: "EGP",
  },
  {
    id: 21,
    language: "Мексиканський песо",
    country: "MXN - ($)",
    cuts: "MXN",
  },
];

export const UserNav: React.FC<Props> = ({ className }) => {
  const { data: session } = useSession();
  return (
    <>
      {/*CurencyDropDown*/}
      <DropdownMenuSecondaryInnerContent
        title="Виберіть валюту"
        menuItems={dropdownCurency}
        srcImage={LanguageDropDown}
        isCurency={true}
        className={cn(
          "rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[525px]",
          className
        )}
      />

      {/*LanguageDropDown*/}
      <DropdownMenuSecondaryInnerContent
        title="Виберіть мову"
        menuItems={dropdownLanguage}
        srcImage={LanguageDropDown}
        className={cn(
          "rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[525px]",
          className
        )}
      />

      {/*MenuDropDown*/}
      <DropdownMenuPrimaryInnerContent
        menuItems={dropdownBurger}
        srcImage={MenuDropDown}
        className={cn(
          "rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[350px]",
          className
        )}
      />

      {!session ? (
        <DropdownMenuPrimaryInnerContent
          menuItems={dropdownUser}
          srcImage={UserDropDown}
          className={cn(
            "rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[350px]",
            className
          )}
        />
      ) : (
        <Button
          asChild
          variant={"outline"}
          className="border-none shadow-none rounded-[21px] h-10.5 w-16.5 flex items-center justify-center cursor-pointer hover:bg-primary-white hover:transition-all duration-300"
        >
          <Link href={"/account"}>
            <Image src={UserDropDown} alt="Logo" />
          </Link>
        </Button>
      )}
    </>
  );
};
