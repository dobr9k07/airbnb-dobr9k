import Image from "next/image";
import React from "react";  

import IconPaternNotFountPrimary from "../../public/svg/IconPaternNotFountPrimary.svg";
import IconPaternNotFountSecond from "../../public/svg/IconPaternNotFountSecond.svg";

export const NotFoundRightSide: React.FC = () => {
  return (
    <div className="relative h-[370px] w-[650px] flex items-center justify-center">
      {/* Primary splash shape (основа) */}
      <div className="absolute">
        <Image
          src={IconPaternNotFountPrimary}
          alt="Primary splash"
          width={640}
          height={385}
        />
      </div>

      {/* Second splash shape (з 404) */}
      <div className="relative z-10 flex items-center justify-center">
        <Image
          src={IconPaternNotFountSecond}
          alt="404 splash"
          width={577}
          height={275}
        />
        <span className="absolute text-8xl font-medium text-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
          404
        </span>
      </div>

      {/* Decorative dots */}
      <div className="absolute w-5.5 h-5.5 top-[42%] left-[90%] bg-primary rounded-full z-20" />
      <div className="absolute w-5 h-5 top-[92%] left-[76%] bg-primary rounded-full z-20" />
      <div className="absolute w-5 h-5.5 top-[80%] left-[6%] bg-primary rounded-full z-20" />
      <div className="absolute w-5.5 h-5 top-[100%] left-[0%] bg-primary rounded-full z-20" />
    </div>
  );
};
