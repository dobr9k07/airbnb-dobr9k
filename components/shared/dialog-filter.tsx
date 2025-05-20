import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { IoFilterCircle } from "react-icons/io5";
import { Title } from "./title";
import { Separator } from "../ui/separator";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { ComfortsItem } from "./comforts-item";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  className?: string;
}

const comfortItems = [
  "Wi-Fi",
  "Кухня",
  "Пральна машина",
  "Сушильна машина",
  "Кондиціонер",
  "Опалення",
  "Wi-Fi1",
  "Кухня2",
  "Пральна машина3",
  "Сушильна машина4",
  "Кондиціонер5",
  "Опалення6",
];

export const DialogFilter: React.FC<Props> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="cursor-pointer">
          <IoFilterCircle /> Фільтри
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-xl max-h-[90vh] z-500">
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center">
            Фільтри
            <Separator className="my-4" />
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[65vh] min-w-[550px] ">
          <div className="flex flex-col gap-4 items-center justify-center mr-5">
            {/*"Чек бокс типу приміщення"*/}
            <div className="w-full flex items-start flex-col gap-4">
              <Title
                text="Тип місця для розміщення"
                size="xs"
                className="font-medium"
              />
              <ToggleGroup type="single" className="w-full border-1">
                <ToggleGroupItem
                  value="bold"
                  className="cursor-pointer border-2 border-black"
                >
                  <p>Будь-який тип</p>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" className="cursor-pointer ">
                  <p>Кімната</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="strikethrough"
                  className="cursor-pointer"
                >
                  <p>Помешкання цілком</p>
                </ToggleGroupItem>
              </ToggleGroup>
              <Separator className="my-4" />
            </div>

            {/*"Діапазон цін"*/}
            <div className="w-full">
              <p className="font-bold mb-3">Діапазон цін</p>

              <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />

              <div className="flex gap-3 mb-5 mt-5">
                <Input
                  type="number"
                  placeholder="0"
                  min={0}
                  max={1000}
                  value={0}
                />
                <Input
                  type="number"
                  placeholder="1000"
                  min={100}
                  max={1000}
                  value={1000}
                />
              </div>
              <Separator className="my-4" />
            </div>

            {/*"Зручності"*/}
            <div className="w-full flex items-start flex-col gap-4">
              <Title text="Зручності" size="xs" className="font-medium" />
              <div className="flex flex-wrap gap-4">
                {comfortItems.map((item) =>
                  item === "Wi-Fi" ? (
                    <ComfortsItem key={item} name={item} active={true} />
                  ) : (
                    <ComfortsItem key={item} name={item} />
                  )
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter className="flex justify-between items-center">
          <Button variant={"ghost"} size={"sm"} className="cursor-pointer">
            Очистити все
          </Button>
          <Button variant={"default"} size={"lg"} className="cursor-pointer">
            Показати 900 місць
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
