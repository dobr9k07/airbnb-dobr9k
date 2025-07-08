"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { Calendar } from "../ui/calendar";

import { DateRange } from "react-day-picker";

interface Props {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  content: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}

export const DateRangePicker: React.FC<Props> = ({
  value,
  onChange,
  content,
  className,
  disabled = false,
  error = false,
}) => {
  return (
    <div
      className={cn(
        "w-full flex items-center rounded-full group  hover:cursor-pointer duration-300 ease-in-out",
        {
          "opacity-50 cursor-not-allowed": disabled,
          "hover:bg-transparent hover:cursor-not-allowed": disabled,
        },
        className
      )}
    >
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <div
            className={cn(
              "w-full h-full flex justify-center items-center gap-5",
              {
                "text-muted-foreground": !value?.from,
                "border-red-500": error,
              }
            )}
          >
            {value?.from ? (
              value.to ? (
                <div className="group-hover:text-white">
                  {format(value.from, "dd MMMM yyyy", { locale: uk })}{" "}
                  – {format(value.to, "dd MMMM yyyy", { locale: uk })}
                </div>
              ) : (
                format(value.from, "dd MMMM yyyy", { locale: uk })
              )
            ) : (
              content
            )}
          </div>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0"
          align="start"
          side="bottom"
          sideOffset={8}
        >
          <Calendar
            autoFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
            locale={uk}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};