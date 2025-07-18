"use client";

import React from "react";
import { RangeSlider } from "./range-slider";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { PopoverContent } from "@radix-ui/react-popover";

interface Props {
  className?: string;
  prices?: number[];
  onValueChange?: (value: number[]) => void;
}

export const Price: React.FC<Props> = ({ prices, onValueChange }) => {
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
            value={prices}
            onValueChange={onValueChange}
          />
          <div className="flex items-center justify-left text-lg font-normal">
            <span>{`UAH₴${prices![0] || 0}`}</span> -{" "}
            <span>{`UAH₴${prices![1] || 1000}`}</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
