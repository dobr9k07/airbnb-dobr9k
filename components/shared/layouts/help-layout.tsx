import React, { ReactNode } from "react";

import { HelpFooter } from "../footers";
import { HelpHeader } from "../headers/help-header";

interface Props {
  children: ReactNode;
}

export const HelpLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HelpHeader />
      <main>{children}</main>
      <HelpFooter />
    </>
  );
};
