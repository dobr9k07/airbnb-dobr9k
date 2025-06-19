import {
  CheckoutLayout,
  Container,
  DescriptionBlockText,
  DescriptionImageBlock,
  RoomInfo,
  Title,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cardItem } from "@/lib/cardItem";
import Image from "next/image";

const paymentMethods = [
  {
    id: "crypto",
    name: "Криптовалюта",
  },
  {
    id: "payPal",
    name: "PayPal",
  },
  {
    id: "visa",
    name: "Visa/Mastercard",
  },
  {
    id: "applePay",
    name: "Apple Pay",
  },
  {
    id: "other",
    name: "Інший гаманці",
  },
] as const;

export default function CheckoutPage() {
  return (
    <CheckoutLayout>
      {/* Блок опису*/}
      <Container>
        <DescriptionImageBlock imageUrl={cardItem[1].imageUrl} />
        <div className="flex items-start justify-between mt-6">
          <RoomInfo room={cardItem[1].rooms[0]} />
          <Title
            className="font-normal"
            text={`${cardItem[1].rooms[0].price} (₴)`}
            size="lg"
          />
        </div>
        <div className="flex items-start justify-between mt-12">
          <div className="flex flex-col gap-2.5">
            <Title text="Дати" size="sm" className="font-normal" />
            <span className="text-xl font-light">8-16 трав. 2028р.</span>
          </div>
          {/* Кнопка для зміни дати тригер range calander*/}
          <Button
            className="text-xl font-medium text-black p-0"
            variant={"link"}
          >
            Редагувати
          </Button>
        </div>
        <Title
          text="Виберіть варіанти оплати"
          size="lg"
          className="font-normal mt-7.5"
        />

        <div className="grid grid-flow-col grid-rows-[auto_auto_1fr] gap-5 mt-5">
          <div className="col-span-1">
            <Card className="h-full">
              <CardContent className="flex flex-col p-0">
                <RadioGroup defaultValue="all">
                  <div className="flex items-center justify-between px-5">
                    <Label className="text-base font-light">
                      Сплатіть ₴29800 зараз
                    </Label>
                    <RadioGroupItem
                      value="all"
                      className="w-4 h-4 text-black"
                    />
                  </div>
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between px-5">
                    <Label className="text-base font-light ">
                      <div className="flex flex-col">
                        <p>Оплата частинами</p>
                        <p>
                          3500₴ потрібно сплатити сьогодні, 7 місяців по 3500.
                        </p>
                        <p> Жодних додаткових зборів.</p>
                      </div>
                    </Label>
                    <RadioGroupItem
                      value="installment"
                      className="w-4 h-4 text-black"
                    />
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1 row-span-2">
            <Card className="h-full">
              <CardContent>
                <div className="flex items-center gap-5">
                  <Image
                    src={"/card/image_1.png"}
                    alt={cardItem[1].owner}
                    width={100}
                    height={100}
                    className="object-cover rounded-xl"
                  />
                  <DescriptionBlockText
                    owner={cardItem[1].owner}
                    isRating={cardItem[1].rating ? true : false}
                    raiting={cardItem[1].rating?.rating ?? 0}
                    reviews={cardItem[1].reviews}
                    location={cardItem[1].location}
                  />
                </div>
                <div className="flex flex-col pr-17">
                  <Title text="Усього" size="md" className="font-normal" />
                  <div className="flex items-center justify-between text-lg font-light">
                    <p>₴3500 х8 ночей</p>
                    <p>₴28000</p>
                  </div>
                  <div className="flex items-center justify-between text-lg font-light">
                    <p>Податки</p>
                    <p>₴1800</p>
                  </div>
                  <div className="flex items-center justify-between text-lg font-light">
                    <p>Всього (UAN)</p>
                    <p>₴29800</p>
                  </div>
                </div>
                <Popover>
                  <PopoverTrigger
                    asChild
                    className="w-full flex items-end justify-end pr-17"
                  >
                    <Button
                      variant={"link"}
                      className="text-lg font-light text-black p-0"
                    >
                      Структура ціни
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-screen max-w-md p-0 rounded-[20px]">
                    <Card className="w-full text-center shadow-none border-none">
                      <CardHeader className="px-0">
                        <CardTitle className="text-xl font-medium">
                          Структура ціни
                        </CardTitle>
                        <Separator />
                      </CardHeader>
                      <CardContent className="gap-3.5 px-0">
                        <div className="flex items-center justify-between text-xl font-light px-6">
                          <p>8 ночей 8-16 трав. 2028р.</p>
                          <p>₴26000</p>
                        </div>
                        <div className="flex items-center justify-between text-xl font-light px-6">
                          <p>Сервіс hata</p>
                          <p>₴2000</p>
                        </div>
                        <div className="flex items-center justify-between text-xl font-light px-6">
                          <p>Податки</p>
                          <p>₴1800</p>
                        </div>
                        <Separator className="mt-7.5" />
                      </CardContent>
                      <CardFooter className="px-0">
                        <div className="flex flex-1 items-center justify-between text-xl font-light px-6">
                          <p>Всьго</p>
                          <p>₴29800</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </div>
          <div className="row-span-3 h-full">
            <Card className="h-full">
              <CardHeader className="px-2.5">
                <Title
                  text="Спосіб оплати"
                  size="md"
                  className="font-normal text-black"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-2.5">
                <RadioGroup defaultValue={paymentMethods[0].id}>
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between rounded-xl border shadow-sm p-5"
                    >
                      <Label className="text-base font-light">
                        {method.name}
                      </Label>
                      <RadioGroupItem
                        value={method.id}
                        className="w-4 h-4 text-black"
                      />
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button className="rounded-[16.5px] mt-12.25 h-8.25 text-[13px] leading-[16px] font-extralight text-white px-20.75 py-2.25">
            Забронювати
          </Button>
        </div>
      </Container>
    </CheckoutLayout>
  );
}
