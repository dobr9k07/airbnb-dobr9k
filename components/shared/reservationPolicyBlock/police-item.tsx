import { PolicyItem } from "@/constans/policy";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  item: PolicyItem;
  className?: string;
}

export const PolicyITem: React.FC<Props> = ({ item, className }) => {
  return (
    <div className={cn("flex gap-3.75 items-start", className)}>
      <Image
        src={item.icon}
        alt={item.title}
        width={30}
        height={30}
        className="object-cover flex-shrink-0"
      />
      <div className="flex flex-col gap-2.75">
        <p className="text-xl font-light">{item.title}</p>

        {item.description && (
          <p className="text-base font-light max-w-[540px]">
            {item.description}
          </p>
        )}

        {item.items && (
          <ul className="text-base font-light max-w-[540px] list-disc">
            {item.items.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        )}

        {item.note && (
          <p className="text-xs font-thin ml-[-25px]">{item.note}</p>
        )}
      </div>
    </div>
  );
};
