import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Counters } from "./counters";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-8.25 text-xl font-light rounded-full shadow-none border border-black"
        >
          Фільтри
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[670px] z-10000"
        side="bottom"
        sideOffset={8}
      >
        <div className="rounded-[20px] bg-white p-5">
          <div className="flex gap-5 items-start bg-white">
            <div className="flex flex-col gap-4 ">
              <p className="text-xl">Фільтри</p>
              <Counters size="lg" />
            </div>
            <div className="flex flex-col h-[175px] gap-3 ">
              <p className="px-8 text-xl">Інші функції</p>
              <CheckboxFiltersGroup
                name="otherFunctions"
                items={[
                  { text: "Кондиціонер", value: "1" },
                  { text: "Кабельне телебачення", value: "2" },
                  { text: "Доступ на ліфті", value: "3" },
                  { text: "Фітнес центр", value: "4" },
                  { text: "Сніданок", value: "5" },
                  { text: "Пральня в номері", value: "6" },
                  { text: "Балкон", value: "7" },
                  { text: "Паркінг", value: "8" },
                ]}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
