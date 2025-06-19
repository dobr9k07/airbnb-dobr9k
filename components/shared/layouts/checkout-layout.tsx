import React, { ReactNode } from "react";
import { CheckoutHeader } from "../headers";
import { CheckoutFooter } from "../footers";

interface Props {
  children?: ReactNode;
}

export const CheckoutLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CheckoutHeader />
      <main>{children}</main>
      <CheckoutFooter />
    </>
  );
};
