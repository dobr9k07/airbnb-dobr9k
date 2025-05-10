"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

interface Props {
  className?: string;
}

export const SubscribeInput: React.FC<Props> = ({ className }) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="relative flex items-center rounded-none border-b border-b-black px-2">
        <Input
          type={"email"}
          placeholder="Enter youy email"
          className="border-0 focus-visible:ring-0 shadow-none"
        />
        <button className="h-5 w-5 hover: cursor-pointer hover:scale-150 duration-200 ease-in">
          <ArrowRight className="text-muted-foreground " />
        </button>
      </div>
    </div>
  );
};
