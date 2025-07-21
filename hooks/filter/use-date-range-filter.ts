import { useState } from "react";
import { DateRange } from "react-day-picker";

export const useDateRangeFilter = (
  searchParams: URLSearchParams
): [DateRange, (range: DateRange | undefined) => void] => {
  const [dateRange, setDateRange] = useState<DateRange>({
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

  return [dateRange, updateDateRange];
};
