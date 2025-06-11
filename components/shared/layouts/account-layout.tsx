import { AccountFooter } from "../footers";
import { AccountHeader } from "../headers";

export const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AccountHeader isSticky={true} />
      {children}
      <AccountFooter />
    </>
  );
};
