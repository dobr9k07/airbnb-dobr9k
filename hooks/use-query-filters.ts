import { useEffect, useRef } from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";


export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();

  console.log("useQueryFilters", filters);

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        ...filters.dateRange,
      };

      const queryString = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${queryString}`, {
        scroll: false,
      });
    }
    isMounted.current = true;
  }, [filters, router]);
};
