import React from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  imageUrl: string;
  link: string;
  name: string;
}

export const CardCity: React.FC<Props> = ({
  imageUrl,
  name,
  link,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Link href={link} className="cursor-pointer">
          <Image
            src={imageUrl}
            alt={name}
            width={354}
            height={248}
            className="object-cover max-sm:hidden"
          />
          <Image
            src={imageUrl}
            alt={name}
            width={210}
            height={111}
            className="object-cover sm:hidden"
          />
        </Link>
      </div>
      {/* Текстова підказка під зображенням */}
      <p className="font-normal text-[40px] text-left mt-3.5 max-sm:text-base">{name}</p>
    </>
  );
};
