import React from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
}

export const CardCity: React.FC<Props> = ({ imageUrl, name, className }) => {
  return (
    <>
      {/* Обгортка для зображення. Використовуємо flex-1 для заповнення доступного простору */}
      <div className={className}>
        <Link href="#" className="cursor-pointer">
          <Image
            src={imageUrl}
            alt={name}
            width={354}
            height={248}
            className="object-cover"
          />
        </Link>
      </div>
      {/* Текстова підказка під зображенням */}
      <p className="font-normal text-[40px] text-left mt-3.5">{name}</p>
    </>
  );
};
