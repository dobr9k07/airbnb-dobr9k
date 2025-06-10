import React, { ReactNode } from "react";
import { NotFoundHeader } from "../headers";
import { NotFoundFooter } from "../footers";

interface Props {
  children?: ReactNode;
}

export const NotFoundLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NotFoundHeader />
      <main>{children}</main>
      <NotFoundFooter />
    </>
  );
};
