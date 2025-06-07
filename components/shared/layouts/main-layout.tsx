import React, { ReactNode } from "react";
import { MainHeader } from "../headers";
import { MainFooter } from "../footers";

interface Props {
  isSticky?: boolean
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ isSticky = false, children }) => {
  return (
    <>
      <MainHeader isSticky = {isSticky}/>
      <main>{children}</main>
      <MainFooter />
    </>
  );
};
