import React from "react";
import { Container, Title } from "@/components/shared";
import { IAboutItem } from "@/lib/item/aboutItem";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  items: IAboutItem[];
}

export const AboutITems: React.FC<Props> = ({ items, className }) => {
  return (
    <Container className="flex flex-col items-center justify-center gap-7.75">
      <section>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "flex gap-20 text-black",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse",
              className
            )}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={604}
              height={453}
              className="w-1/2 h-auto mb-7.75 rounded-[59px] object-cover"
            />
            <div className="flex flex-col gap-3.5">
              <Title text={item.title} size="2lg" />
              <p className="text-xl font-normal">{item.description}</p>
              {item.list && (
                <ul className="text-xl list-disc pl-5">
                  {item.list.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
};
