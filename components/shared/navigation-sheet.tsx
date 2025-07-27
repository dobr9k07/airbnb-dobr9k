import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

interface Props {
  className?: string;
}

export const NavigationSheet: React.FC<Props> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shadow-none border-none">
          <Menu width={64} height={64} />
        </Button>
      </SheetTrigger>
      {/* <SheetContent>
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent> */}
    </Sheet>
  );
};
