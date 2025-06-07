import React, { ReactNode } from "react";
import { MainHeader } from "../headers";
import { MainFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const AboutLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};
