import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  ref,
  className,
  children,
}) => {
  return (
    <div id={id} className={cn("mx-auto max-w-[1254px]", className)} ref={ref}>
      {children}
    </div>
  );
};
