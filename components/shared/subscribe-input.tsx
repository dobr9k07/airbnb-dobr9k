"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SubscribeInput: React.FC<Props> = ({ className }) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div
        className={cn(
          "relative flex items-center rounded-none border-b  px-2",
          className
        )}
      >
        <Input
          type={"email"}
          placeholder="Enter youy email"
          className={cn(
            "border-0 focus-visible:ring-0 shadow-none  placeholder:font-extralight",
            className
          )}
        />
        <button className="h-5 w-5 hover: cursor-pointer hover:scale-150 duration-200 ease-in">
          <ArrowRight className={cn("", className)} />
        </button>
      </div>
    </div>
  );
};
