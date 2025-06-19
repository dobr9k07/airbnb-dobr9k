"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const FormCheckbox: React.FC<Props> = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={(checked) => field.onChange(checked)}
            className="rounded-full w-5 h-5"
          />
          <label
            htmlFor={name}
            className="text-2xl font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      )}
    />
  );
};
