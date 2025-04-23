import { cn } from "@/lib/utils";
import React from "react";
import { IoWifiOutline } from "react-icons/io5";

interface Props {
  imageUrl?: string;
  name: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ComfortsItem: React.FC<Props> = ({
  imageUrl,
  name,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5 p-3 rounded-full text-center relative cursor-pointer border-2 ",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      <IoWifiOutline width={24} height={24} />
      <span className="text-[14px]">{name}</span>
    </div>
  );
};
