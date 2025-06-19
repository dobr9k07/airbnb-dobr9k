import {
  AccountLayout,
  Container,
  ListingCardWithCarousel,
  ReviewCard,
  Title,
} from "@/components/shared";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import IconChat from "../../../public/svg/IconChat.svg";
import IconTravel from "../../../public/svg/IconTravel.svg";

import { cardItem } from "@/lib/cardItem";
import { Heart } from "lucide-react";
export default function AccountPage() {
  return (
    <AccountLayout>
      <Container className="flex flex-col mt-9">
        <div className="flex items-center justify-start gap-4.75 mb-9.25">
          <Title className="font-normal" text={"Мій профіль"} size="lg" />
          <Link href="/account/edit">
            <Button
              variant={"link"}
              className="text-2xl font-light text-black underline"
            >
              Редагувати
            </Button>
          </Link>
        </div>

        <div className="flex items-start justify-start gap-9.25 mb-17.75">
          <Card className="w-[430px] p-7">
            <CardContent className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col gap-4">
                <Avatar className="w-29.5 h-29.5">
                  <AvatarFallback className="text-[64px] font-normal text-white">
                    {"S"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[40px] leading-10 font-normal">
                    Svetlana
                  </span>
                  <span className="text-xl font-extralight">Гість</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-3.5 text-2xl font-light">
            <span>Професія: Лікар</span>
            <span>Домашні тварини: черепаха, два кота</span>
            <span>Рік народження: 76-ий</span>
            <span>
              Володіє такими мовами: Англійська, Російська і Українська
            </span>
            <span>Улюблене місто: Рим</span>
          </div>
        </div>

        <div className="border-1 border-b mx-auto w-full mb-7 border-black"></div>

        <div className="flex items-center justify-start gap-2.5 mb-4">
          <Image src={IconChat} width={35} height={35} alt="chat" />
          <p className="text-[28px] leading-[34px] font-normal">
            Написані мною відгуки
          </p>
        </div>

        <div className="flex flex-wrap gap-12.5 mb-17.75">
          {cardItem[1].reviewsList?.slice(0, 4).map((review) => (
            <ReviewCard
              key={review.id}
              item={review}
              className="w-[350px] rounded-2xl border-[0.3px]"
            />
          ))}
        </div>

        <div className="border-1 border-b mx-auto w-full mb-7 border-black"></div>

        <div className="flex items-center justify-start gap-2.5 mb-4">
          <Image src={IconTravel} width={27} height={27} alt="chat" />
          <p className="text-[28px] leading-[34px] font-normal">
            Минулі подорожі
          </p>
        </div>

        <div className="flex items-start gap-5 flex-wrap mb-9.5">
          {cardItem.map((item) => (
            <ListingCardWithCarousel
              key={item.id}
              id={item.id}
              location={item.location}
              imageUrls={item.imageUrl}
              price={item.price}
              rating={item.rating?.rating}
              reviwes={item.rating?.reviews}
            />
          ))}
        </div>

        <div className="border-1 border-b mx-auto w-full mb-7 border-black"></div>

        <div className="flex items-center justify-start gap-2.5 mb-4">
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          <p className="text-[28px] leading-[34px] font-normal">Обране</p>
        </div>

        <div className="flex items-start gap-5 flex-wrap mb-9.5">
          {cardItem.slice(0, 2).map((item) => (
            <ListingCardWithCarousel
              key={item.id}
              id={item.id}
              location={item.location}
              imageUrls={item.imageUrl}
              price={item.price}
              rating={item.rating?.rating}
              reviwes={item.rating?.reviews}
              isFavorite={true}
            />
          ))}
        </div>

        <div className="border-1 border-b mx-auto w-full mb-7 border-black"></div>

        <div className="flex items-center justify-start gap-2.5 mb-4">
          <Image src={IconChat} width={35} height={35} alt="chat" />
          <p className="text-[28px] leading-[34px] font-normal">Повідомлення</p>
        </div>

        <div className="flex items-center justify-start mb-32.5">
          <p className="text-2xl font-light">У вас немає нових повідомлень</p>
        </div>
      </Container>
    </AccountLayout>
  );
}
