import React from "react";
import { Title } from "../title";
import Image from "next/image";

interface Props {
  imageUrl: string[];
  comforts: string[];
  className?: string;
}

export const ConvenienceBlock: React.FC<Props> = ({
  imageUrl,
  comforts,
  className,
}) => {
  return (
    <>
      <Title text="Зручності" size="lg" className="font-medium mb-5.5" />
      <div className="flex flex-col mb-10.75">
        <div className="flex gap-8 mb-16.5">
          {imageUrl.slice(1, 3).map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="room"
              width={590}
              height={388}
              className="rounded-[43px] object-cover"
            />
          ))}
        </div>
        <div className="flex gap-8">
          {comforts.map((item, index) => (
            <p key={index} className="text-base font-light">
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
