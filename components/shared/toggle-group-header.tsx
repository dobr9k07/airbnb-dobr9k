import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const ToggleGroupHeader: React.FC<Props> = ({ className }) => {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" className="p-5 cursor-pointer">
        <Title text={"Помешкання"} size="xs" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" className="p-5 cursor-pointer">
        <Title text={"Враження"} size="xs" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
