import React, { ReactNode } from "react";
import { AuthHeader } from "../headers";
import { AuthFooter } from "../footers";

interface Props {
  children: ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
      <AuthFooter />
    </>
  );
};
