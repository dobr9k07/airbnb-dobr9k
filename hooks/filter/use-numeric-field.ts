import { FIELD_TO_PARAM_MAP, NumericField } from "@/constans/numeric-field";
import { useState } from "react";

export const useNumericField = (
  fieldName: NumericField,
  searchParams: URLSearchParams,
  minValue = 1
) => {
  const paramName = FIELD_TO_PARAM_MAP[fieldName];
  const [value, setValue] = useState<number>(
    searchParams.get(paramName) ? Number(searchParams.get(paramName)) : minValue
  );

  const updateValue = (type: "plus" | "minus") => {
    setValue((prev) => {
      const updated = type === "plus" ? prev + 1 : prev - 1;
      return Math.max(updated, minValue);
    });
  };

  return [value, updateValue] as const;
};
