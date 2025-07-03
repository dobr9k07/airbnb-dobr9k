import React from "react";

import UserDropDown from "../../public/User_alt_light.png";
import MenuDropDown from "../../public/Variant2.png";
// import LanguageDropDown from "../../public/svg/IconTranslate.svg";
import LanguageDropDown from "../../public/Language.png";

import {
  DropdownMenuPrimaryInnerContent,
  DropdownMenuSecondaryInnerContent,
} from "./dropdown-menu-inner-content";

interface Props {
  className?: string;
}

export interface IContent {
  id: number;
  title: string;
}

export interface ILanguage {
  id: number;
  language: string;
  country: string;
  cuts: string;
}

const dropdownBurger: IContent[] = [
  {
    id: 1,
    title: "Повідомлення",
  },
  {
    id: 2,
    title: "Налаштування акаунта та повідмлень",
  },
  {
    id: 3,
    title: "Запропонувати помешкання на hata",
  },
  {
    id: 4,
    title: "Подорожі",
  },
  {
    id: 5,
    title: "Обране",
  },
];

const dropdownUser: IContent[] = [
  {
    id: 6,
    title: "Увійти",
  },
  {
    id: 7,
    title: "Зареєструватися",
  },
  {
    id: 8,
    title: "Про нас ",
  },
  {
    id: 9,
    title: "Підтримка",
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
  return (
    <>
      {/*CurencyDropDown*/}
      <DropdownMenuSecondaryInnerContent
        title="Виберіть валюту"
        menuItems={dropdownCurency}
        srcImage={LanguageDropDown}
        isCurency={true}
        className="rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[525px]"
      />

      {/*LanguageDropDown*/}
      <DropdownMenuSecondaryInnerContent
        title="Виберіть мову"
        menuItems={dropdownLanguage}
        srcImage={LanguageDropDown}
        className="rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[525px]"
      />

      {/*MenuDropDown*/}
      <DropdownMenuPrimaryInnerContent
        menuItems={dropdownBurger}
        srcImage={MenuDropDown}
        className="rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base font-light w-[350px]"
      />

      {/*UserDropDown*/}
      <DropdownMenuPrimaryInnerContent
        menuItems={dropdownUser}
        srcImage={UserDropDown}
        className="rounded-[20px] pt-[22px] pl-[28px] pb-[23px] text-base w-[245px]"
      />
    </>
  );
};
