import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import UserDropDown from "../../public/User_alt_light.png";
import MenuDropDown from "../../public/Variant2.png";

interface Props {
  className?: string;
}

export const UserNav: React.FC<Props> = ({ className }) => {
  return (
    <>
      {/*MenuDropDown*/}
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
          <div className="rounded-[21px] h-10.5 w-16.5 lg:py-2 flex items-center justify-center cursor-pointer hover:bg-primary-white hover:transition-all duration-300">
            <Image src={MenuDropDown} alt="UserLogo" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[300px] z-200">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              Запропонувати помешкання на hata
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Про нас
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Підтримка
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/*UserDropDown*/}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-[21px] h-10.5 w-16.5 lg:px-4 lg:py-2 flex items-center justify-center cursor-pointer hover:bg-primary-white hover:transition-all duration-300">
            <Image src={UserDropDown} alt="UserLogo" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[300px] z-200">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              Увійти
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Повідомлення
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Сповіщення
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Подорожі
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Обране
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
