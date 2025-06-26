import React, { ReactNode } from "react";
import { BlogCategoryHeader } from "../headers";
import { BlogCategoryFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const BlogCategoryLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BlogCategoryHeader />
      <main>{children}</main>
      <BlogCategoryFooter />
    </>
  );
};
