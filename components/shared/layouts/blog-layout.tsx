import React, { ReactNode } from "react";
import { BlogHeader } from "../headers";
import { BlogFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const BlogLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};
