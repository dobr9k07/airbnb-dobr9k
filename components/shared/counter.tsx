import React, { ReactNode } from "react";
import { CountButton } from "./count-button";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "lg";
  value: number;
  onChange: (type: "plus" | "minus") => void;
  content: ReactNode;
  className?: string;
}

export const Counter: React.FC<Props> = ({
  size = "sm",
  value,
  onChange,
  content,
  className,
}) => {
  return (
    <div className={cn("h-full flex gap-2.5 items-center max-sm:border max-sm:border-black max-sm:min-w-85 max-sm:rounded-full max-sm:px-5", className)}>
      {content}
      <CountButton size={size} value={value} onClick={onChange} />
    </div>
  );
};
