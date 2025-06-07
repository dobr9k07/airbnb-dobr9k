import React, { ReactNode } from "react";
import { BlogHeader } from "../headers";
import { BlogSlugFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const BlogSlugLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BlogHeader />
      {children}
      <BlogSlugFooter />
    </>
  );
};
