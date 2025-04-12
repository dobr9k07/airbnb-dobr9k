import React from "react";
import { Title } from "./title";
import { FcBookmark } from "react-icons/fc";

interface Props {
  title: string;
  className?: string;
}

export const MiniBaner: React.FC<Props> = ({ title, className }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <FcBookmark />
        <Title text={title} size="xs" className={className} />
      </div>
    </>
  );
};
