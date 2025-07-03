import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  onClick?: () => void;
}
export const SearchIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  className,
  color = "currentColor",
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={cn("mr-3", className)}
      onClick={onClick}
    >
      <circle cx="12.8335" cy="12.8333" r="7" stroke="currentColor" />
      <path
        d="M23.3335 23.3333L19.8335 19.8333"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};
