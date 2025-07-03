import React from "react";
import Image from "next/image";

import IconInstagram from "@/public/social/iconInstagram.svg";
import IconFacebbok from "@/public/social/iconFacebook.svg";
import IconTwitter from "@/public/social/iconTwitter.svg";

interface Props {
  wrapingClass?: boolean;
  className?: string;
}

export const SocialLinks: React.FC<Props> = ({
  wrapingClass = false,
  className,
}) => {
  return (
    <>
      {wrapingClass ? (
        <div className="w-full flex items-center justify-between gap-2">
          <div className={className}>
            <Image src={IconInstagram} alt="Instagram" />
          </div>
          <div className={className}>
            <Image src={IconFacebbok} alt="Facebbok" />
          </div>
          <div className={className}>
            <Image src={IconTwitter} alt="Twitter" />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Image src={IconInstagram} alt="Instagram" className={className} />

          <Image src={IconFacebbok} alt="Facebbok" className={className} />

          <Image src={IconTwitter} alt="Twitter" className={className} />
        </div>
      )}
    </>
  );
};
