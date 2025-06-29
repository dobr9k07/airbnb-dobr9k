import React from "react";
import { Counter } from "./counter";
import { useCounter } from "@/hooks";
import { cn } from "@/lib/utils";

interface Props {
  size?: "sm" | "lg";
  className?: string;
}

export const Counters: React.FC<Props> = ({ size = "sm", className }) => {
  const bedrooms = useCounter();
  const beds = useCounter();
  const bathrooms = useCounter();
  return (
    <div className={cn("flex flex-col justify-center", className)}>
      <Counter
        className="rounded-full justify-between"
        value={bedrooms.count}
        onChange={bedrooms.onClick}
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
        value={beds.count}
        onChange={beds.onClick}
        size={size}
        content={
          <>
            <p className="text-base text-black font-light">Ліжка</p>
          </>
        }
      />
      <Counter
        className="rounded-full justify-between"
        value={bathrooms.count}
        onChange={bathrooms.onClick}
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
