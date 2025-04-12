import React from "react";
import { Button } from "../ui/button";
import { IoFilterCircle } from "react-icons/io5";

interface Props {
  className?: string;
}

export const DialogFilter: React.FC<Props> = ({ className }) => {
  return (
    <Button variant={"outline"} className="cursor-pointer">
      <IoFilterCircle /> Фільтри
    </Button>
  );
};
