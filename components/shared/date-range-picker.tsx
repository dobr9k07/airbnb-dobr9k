"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Controller, useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { Calendar } from "../ui/calendar";

interface Props {
  name: string;
  content: React.ReactNode;
  className?: string;
}

export const DateRangePicker: React.FC<Props> = ({
  name,
  content,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn(
        "w-full flex items-center rounded-full group hover:bg-primary hover:cursor-pointer duration-300 ease-in-out ",
        className
      )}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <div
                className={cn(
                  "w-full h-full flex justify-center items-center gap-5",
                  {
                    "text-muted-foreground": !field.value?.from,
                    "border-red-500": errors[name],
                  }
                )}
              >
                {field.value?.from ? (
                  field.value.to ? (
                    <div className="group-hover:text-white">
                      {format(field.value.from, "dd MMMM yyyy", { locale: uk })}{" "}
                      – {format(field.value.to, "dd MMMM yyyy", { locale: uk })}
                    </div>
                  ) : (
                    format(field.value.from, "dd MMMM yyyy", { locale: uk })
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
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={field.onChange}
                numberOfMonths={2}
                locale={uk} // Підключено українську локалізацію
                disabled={{ before: new Date() }} //Заборона минулих дат
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </div>
  );
};
