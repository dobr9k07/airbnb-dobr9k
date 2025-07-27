"use client";

import { Controller, useFormContext } from "react-hook-form";
import { DateRangePicker, DateRangePickerMobile } from "../date-range-picker";
import { MoveRight } from "lucide-react";

export const DateRangeField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="dateRange"
      control={control}
      render={({ field }) => (
        <>
          <DateRangePicker
            className="w-[285px] h-17 hover:bg-primary max-sm:hidden"
            value={field.value}
            onChange={field.onChange}
            content={
              <>
                <span className="text-xl font-light text-black group-hover:text-white">
                  Заїзд
                </span>
                <MoveRight
                  width={17}
                  height={17}
                  className="text-black group-hover:text-white stroke-current"
                />
                <span className="text-xl font-light text-black group-hover:text-white">
                  Виїзд
                </span>
              </>
            }
            error={!!errors.dateRange}
          />
          <DateRangePickerMobile
            className="sm:hidden hover:bg-primary h-8 max-w-85 border border-black"
            value={field.value}
            onChange={field.onChange}
            content={
              <>
                <span className="text-xl font-light text-black group-hover:text-white">
                  Заїзд
                </span>
                <MoveRight
                  width={17}
                  height={17}
                  className="text-black group-hover:text-white stroke-current"
                />
                <span className="text-xl font-light text-black group-hover:text-white">
                  Виїзд
                </span>
              </>
            }
            error={!!errors.dateRange}
          />
        </>
      )}
    />
  );
};
