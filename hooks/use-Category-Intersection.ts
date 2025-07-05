'use client';

import { useCategoryNav } from "@/store/category";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

export function useCategoryIntersection(categoryId: number, threshold = 0.4) {
  const ref = useRef<HTMLElement | null>(null);
  const intersection = useIntersection(ref as React.RefObject<HTMLElement>, {
    threshold,
  });

  const setActiveCategoryNavId = useCategoryNav((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryNavId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryNavId]);

  return ref;
}
