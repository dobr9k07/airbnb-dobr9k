import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const ContactSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("space-y-5 font-light", className)}>
      <p>Що ще ви хотіли б знати?</p>
      <p>
        Надішліть електронного листа нашому відділу на{" "}
        <a href="#" className=" underline">
          hata@gmail.com
        </a>
      </p>
    </div>
  );
};
