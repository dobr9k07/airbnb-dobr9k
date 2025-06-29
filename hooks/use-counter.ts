"use client";

import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const onClick = (type: "plus" | "minus") => {
    setCount((prev) => {
      const updated = type === "plus" ? prev + 1 : prev - 1;
      return Math.max(updated, 1); // Не менше 1
    });
  };

  return {
    count,
    onClick,
    setCount,
  };
};
