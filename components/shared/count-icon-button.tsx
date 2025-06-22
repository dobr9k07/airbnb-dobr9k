import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountButtonProps } from "./count-button";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  size?: CountButtonProps["size"];
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
  size = "sm",
  disabled,
  type,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm"
          ? "w-[27px] h-[27px] rounded-full"
          : "w-[38px] h-[38px] rounded-md"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-3" : "h-4"} cursor={"pointer"} />
      ) : (
        <Minus className={size === "sm" ? "h-3" : "h-4"} cursor={"pointer"} />
      )}
    </Button>
  );
};
