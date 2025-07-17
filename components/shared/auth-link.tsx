import React from "react";

import IconInstagram from "@/public/social/iconInstagram.svg";
import IconFacebbok from "@/public/social/iconFacebook.svg";
import IconTwitter from "@/public/social/iconTwitter.svg";
import Image from "next/image";

import { signIn } from "next-auth/react";

interface Props {
  className?: string;
}

export const AuthLink: React.FC<Props> = ({ className }) => {
  return (
    <div className="w-full flex items-center justify-between gap-2">
      <div className={className}>
        <button className="cursor-pointer">
          <Image src={IconInstagram} alt="Instagram" />
        </button>
      </div>
      <div className={className}>
        <button
          className="cursor-pointer"
          onClick={() => {
            signIn("facebook", { callbackUrl: "/", redirect: true });
          }}
        >
          <Image src={IconFacebbok} alt="Facebbok" />
        </button>
      </div>
      <div className={className}>
        <button
          onClick={() => {
            signIn("twitter", { callbackUrl: "/", redirect: true });
          }}
          className="cursor-pointer"
        >
          <Image src={IconTwitter} alt="Twitter" />
        </button>
      </div>
    </div>
  );
};
