'use client';
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SearchInput } from "../search-input";

export const CityField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="city"
      control={control}
      render={({ field }) => (
        <SearchInput
          placeholder="Виберіть місто"
          className="w-89 h-17 max-sm:h-8 max-sm:max-w-85"
          marginTop="top-14"
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};
