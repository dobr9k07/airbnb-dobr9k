"use client";

import React, { InputHTMLAttributes } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClearButton } from "../clear-button";
import { RequiredSymbol } from "../required-symbol";
import { ErrorText } from "../error-text";

import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => setValue(name, "", { shouldValidate: true });

  return (
    <div className={className}>
      {label && (
        <Label className={cn("text-2xl font-normal m-1.25", className)}>
          {label} {required && <RequiredSymbol />}
        </Label>
      )}
      <div className="relative">
        <Label htmlFor={name}></Label>
        <Input
          className="h-14 text-2xl"
          id={name}
          {...register(name)}
          {...props}
        />

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
