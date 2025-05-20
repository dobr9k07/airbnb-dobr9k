"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  value: number;
  count: number;
}

export const ProgressStat: React.FC<Props> = ({ value, count, className }) => {
  const calculatedValue = (value / 200) * 100;

  const [progress] = React.useState(calculatedValue);

  return (
    <div className={cn("flex items-center justify-start gap-3", className)}>
      <span className="text-sm">{count}</span>
      <Progress value={progress} className="w-full" />
    </div>
  );
};
