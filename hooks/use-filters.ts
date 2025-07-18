"use client";

import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { DateRange } from "react-day-picker";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  prices: PriceProps;
  dateRange: DateRange;
}

interface ReturnProps extends Filters {
  setPrices: (prices: number[]) => void;
  setDateRange: (range: DateRange | undefined) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  /*Діапащон ціни */
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom:
      searchParams.get("priceFrom") !== null
        ? Number(searchParams.get("priceFrom"))
        : undefined,
    priceTo:
      searchParams.get("priceTo") !== null
        ? Number(searchParams.get("priceTo"))
        : undefined,
  });

  const updatePrice = (prices: number[]) => {
    setPrices({
      priceFrom: prices[0],
      priceTo: prices[1],
    });
  };

  /* Діапазон дат */
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: searchParams.get("from")
      ? new Date(searchParams.get("from")!)
      : undefined,
    to: searchParams.get("to") ? new Date(searchParams.get("to")!) : undefined,
  });

  const updateDateRange = (range: DateRange | undefined) => {
    if (range?.from || range?.to) {
      setDateRange(range);
    }
  };

  return useMemo(
    () => ({
      prices,
      setPrices: updatePrice,
      dateRange,
      setDateRange: updateDateRange,
    }),
    [prices, dateRange]
  );
};
