import React from "react";
import { MainFooter } from "./main-footer";

interface Props {
  className?: string;
}

export const BlogFooter: React.FC<Props> = ({ className }) => {
  return <MainFooter className={className} />;
};
