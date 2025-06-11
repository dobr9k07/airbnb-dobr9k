import React, { ReactNode } from "react";
import { AboutHeader } from "../headers";
import { AboutFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const AboutLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AboutHeader />
      <main>{children}</main>
      <AboutFooter />
    </>
  );
};
