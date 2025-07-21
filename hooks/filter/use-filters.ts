"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { DateRange } from "react-day-picker";
import { useSet } from "react-use";
import { useNumericField } from "./use-numeric-field";
import { PriceProps, usePriceFilter } from "./use-price-filter";
import { useDateRangeFilter } from "./use-date-range-filter";

export interface Filters {
  guest: number;
  bedroom: number;
  bed: number;
  bathroom: number;
  otherFunctions: Set<string>;
  prices: PriceProps;
  dateRange: DateRange;
}

export interface ReturnProps extends Filters {
  setGuest: (type: "plus" | "minus") => void;
  setBedroom: (type: "plus" | "minus") => void;
  setBed: (type: "plus" | "minus") => void;
  setBathroom: (type: "plus" | "minus") => void;
  setPrices: (prices: number[]) => void;
  setDateRange: (range: DateRange | undefined) => void;
  setOtherFunctions: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  // Використовуємо кастомний хук для всіх числових полів
  const [guest, setGuest] = useNumericField("guest", searchParams);
  const [bedroom, setBedroom] = useNumericField("bedroom", searchParams);
  const [bed, setBed] = useNumericField("bed", searchParams);
  const [bathroom, setBathroom] = useNumericField("bathroom", searchParams);

  /* Інші функції */
  const [otherFunctions, { toggle: toggleOtherFunctions }] = useSet(
    new Set<string>(
      searchParams.getAll("otherFunctions")
        ? searchParams.get("otherFunctions")?.split(",")
        : []
    )
  );

  /*Діапащон ціни */
  const [prices, setPrices] = usePriceFilter(searchParams);
  /* Діапазон дат */
  const [dateRange, setDateRange] = useDateRangeFilter(searchParams);

  return useMemo(
    () => ({
      guest,
      bedroom,
      bed,
      bathroom,
      prices,
      dateRange,
      otherFunctions,
      setGuest,
      setBedroom,
      setBed,
      setBathroom,
      setPrices,
      setDateRange,
      setOtherFunctions: toggleOtherFunctions,
    }),
    [guest, bedroom, bed, bathroom, prices, dateRange, otherFunctions]
  );
};
