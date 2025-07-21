"use client";
import React from "react";
import { SearchSecondInput } from "./search-input";
import { DateRangePicker } from "./date-range-picker";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Counter } from "./counter";
import { Price } from "./price";
import { Filters } from "./filters";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryFilters } from "@/hooks/filter/use-query-filters";
import { GuestsIcon } from "./svg-components";
import { useFilters } from "@/hooks";

interface Props {
  className?: string;
}

const selectItem = [
  {
    id: 1,
    name: "Кращий вибір",
  },
  {
    id: 2,
    name: "Ціна",
  },
  {
    id: 3,
    name: "Відстань до центру міста",
  },
  {
    id: 4,
    name: "Відстань до пляжу",
  },
];

export const FilterCitySlug: React.FC<Props> = ({ className }) => {
  const filters = useFilters();
  useQueryFilters(filters);

  return (
    <div className="flex flex-col gap-7 mr-13">
      <div
        className={cn(
          "w-full flex justify-between items-center gap-5",
          className
        )}
      >
        <SearchSecondInput
          placeholder="Виберіть місто"
          className="w-50 h-8.25"
        />
        <DateRangePicker
          className="w-50 h-8.25 border border-black hover:bg-[#E0E0E0] transition-all duration-200"
          value={filters.dateRange}
          onChange={filters.setDateRange}
          formatStr="dd MMMM"
          content={
            <>
              <span className="text-xl font-light text-black ">Заїзд</span>
              <MoveRight width={17} height={17} color="#000000" />
              <span className="text-xl font-light text-black ">Виїзд</span>
            </>
          }
          error={false}
          disabled={false}
        />
        <Counter
          className="border border-black rounded-full px-3"
          value={filters.guest}
          onChange={filters.setGuest}
          content={
            <>
              <GuestsIcon className="mr-0" />
              <p className="text-xl text-black font-light">Гості</p>
            </>
          }
        />
        <Price
          prices={[
            filters.prices.priceFrom ?? 0,
            filters.prices.priceTo ?? 1000,
          ]}
          onValueChange={filters.setPrices}
        />
        <Filters
          filters={filters}
          selevted={filters.otherFunctions}
          onClickCheckbox={filters.setOtherFunctions}
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <p className="text-xl font-medium">Понад 500 помешкань</p>
        <div className="flex items-center gap-7.25">
          <p className="text-xl font-light">Сортувати</p>
          <Select>
            <SelectTrigger className="w-[240px] rounded-[41.5px]">
              <SelectValue
                className="text-xl font-light text-black"
                placeholder="Кращий вибір"
              />
            </SelectTrigger>
            <SelectContent className="p-2 z-1000 rounded-3xl w-[320px]">
              <SelectGroup>
                {selectItem.map((item) => (
                  <SelectItem
                    key={item.id}
                    value={item.name}
                    className="text-xl font-light text-black"
                  >
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
