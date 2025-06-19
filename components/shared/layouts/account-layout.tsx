import React, { ReactNode } from "react";
import { AccountHeader } from "../headers";
import { AccountFooter } from "../footers";

interface Props {
  children?: ReactNode;
}

export const AccountLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AccountHeader />
      <main>{children}</main>
      <AccountFooter />
    </>
  );
};
