"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Counter } from "../counter";
import { GuestsIcon } from "../svg-components";

export const GuestsField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="guests"
      control={control}
      render={({ field }) => (
        <Counter
          value={field.value}
          onChange={(type) => {
            const newValue =
              type === "plus" ? field.value + 1 : Math.max(1, field.value - 1);
            field.onChange(newValue);
          }}
          content={
            <>
              <GuestsIcon className="mr-0" />
              <p className="text-xl text-black font-light">Гості</p>
            </>
          }
        />
      )}
    />
  );
};
