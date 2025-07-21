import React from "react";
import { Counter } from "./counter";
import { cn } from "@/lib/utils";
import { ReturnProps } from "@/hooks/filter/use-filters";

interface Props {
  filters: ReturnProps;
  size?: "sm" | "lg";
  className?: string;
}

export const Counters: React.FC<Props> = ({
  filters,
  size = "sm",
  className,
}) => {
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <Counter
        className="rounded-full justify-between"
        value={filters.bedroom}
        onChange={filters.setBedroom}
        size={size}
        content={
          <>
            <p className="text-base text-black font-light justify-between">
              Спальні
            </p>
          </>
        }
      />
      <Counter
        className="rounded-full justify-between"
        value={filters.bed}
        onChange={filters.setBed}
        size={size}
        content={
          <>
            <p className="text-base text-black font-light">Ліжка</p>
          </>
        }
      />
      <Counter
        className="rounded-full justify-between"
        value={filters.bathroom}
        onChange={filters.setBathroom}
        size={size}
        content={
          <>
            <p className="text-base text-black font-light">Ванні кімнати</p>
          </>
        }
      />
    </div>
  );
};
