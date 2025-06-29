"use client";
import React from "react";

import { Skeleton } from "../ui/skeleton";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { cn } from "@/lib/utils";

type Item = FilterChecboxProps;

interface Props {
  items: Item[];
  loading?: boolean;
  className?: string;
  selected?: Set<string>;
  onClickCheckbox?: (id: string) => void;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  items,
  className,
  selected,
  loading,
  onClickCheckbox,
  name,
}) => {
  if (loading) {
    return (
      <div className={className}>
        {...Array(items.length)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}

        <Skeleton className="w-28  h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <ul className="list-disc columns-2 space-y-3">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </ul>
    </div>
  );
};
