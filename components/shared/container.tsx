import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  id?: string;
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  className,
  children,
}) => {
  return (
    <div id={id} className={cn("mx-auto max-w-[1520px]", className)}>
      {children}
    </div>
  );
};
