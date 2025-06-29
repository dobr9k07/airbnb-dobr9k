import React from "react";
import { RangeSlider } from "./range-slider";
import { useFilters } from "@/hooks";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { PopoverContent } from "@radix-ui/react-popover";

interface Props {
  className?: string;
}

export const Price: React.FC<Props> = ({}) => {
  const filters = useFilters();

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-8.25 text-xl font-light rounded-full shadow-none border border-black"
        >
          Ціна
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] z-100" side="bottom" sideOffset={8}>
        {/* Діапазон цін */}
        <div className="rounded-[20px] bg-white p-5">
          <p className="font-bold mb-3">Ціна за ніч</p>
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={[
              filters.prices.priceFrom || 0,
              filters.prices.priceTo || 1000,
            ]}
            onValueChange={updatePrices}
          />
          <div className="flex items-center justify-left text-lg font-normal">
            <span>{`UAH₴${filters.prices.priceFrom}`}</span> -{" "}
            <span>{`UAH₴${filters.prices.priceTo}`}</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
