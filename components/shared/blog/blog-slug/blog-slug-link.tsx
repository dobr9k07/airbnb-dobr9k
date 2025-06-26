import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "../../social-links";

interface Props {
  className?: string;
}

export const BlogSlugLink: React.FC<Props> = ({ className }) => {
  return (
    <>
      <p className="text-2xl font-medium">Надихнулися?</p>
      <p className="text-xl font-normal">
        Унікальні простори в понад 40 містах світу — знайдеться ідеальний Sonder
        для вас.
      </p>
      <Link href="/">
        <Button className="rounded-[38px] h-17 text-xl font-normal text-white px-26 py-5 mt-9">
          Поїхали
        </Button>
      </Link>

      <div className="w-full flex items-start flex-col gap-3.75">
        <p className="text-2xl font-medium">Поділитися:</p>
        <SocialLinks className={className} />
      </div>
    </>
  );
};
