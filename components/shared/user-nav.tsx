import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoMdMenu } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";

interface Props {
  className?: string;
}

export const UserNav: React.FC<Props> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3 cursor-pointer hover:shadow-xl/20 transition-shadow duration-300">
          <IoMdMenu className="w-6 h-6" />
          <PiUserCircleDuotone className="h-8 w-8" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">Увійти</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Зареєструватися
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Запропонувати помешкання на Airbnb
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Організувати враження
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Довідковий центр
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
