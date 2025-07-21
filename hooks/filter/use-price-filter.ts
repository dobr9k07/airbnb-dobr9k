import { useState } from "react";

export interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const usePriceFilter = (
  searchParams: URLSearchParams
): [PriceProps, (prices: number[]) => void] => {
  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: searchParams.get("priceFrom")
      ? Number(searchParams.get("priceFrom"))
      : undefined,
    priceTo: searchParams.get("priceTo")
      ? Number(searchParams.get("priceTo"))
      : undefined,
  });

  const updatePrices = (values: number[]) => {
    setPrices({
      priceFrom: values[0],
      priceTo: values[1],
    });
  };

  return [prices, updatePrices];
};
