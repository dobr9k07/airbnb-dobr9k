import { useEffect, useRef } from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        from: formatDateForUrl(filters.dateRange.from),
        to: formatDateForUrl(filters.dateRange.to),
        guest: filters.guest,
        bedrooms: filters.bedroom,
        beds: filters.bed,
        bathrooms: filters.bathroom,
        otherFunctions: Array.from(filters.otherFunctions),
      };

      const queryString = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${queryString}`, {
        scroll: false,
      });
    }
    isMounted.current = true;
  }, [filters]);
};

const formatDateForUrl = (date: Date | undefined): string | undefined => {
  if (!date) return undefined;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
