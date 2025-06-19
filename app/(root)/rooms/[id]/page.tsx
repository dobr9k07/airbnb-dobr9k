import {
  AvailabilityBlock,
  Container,
  ConvenienceBlock,
  DescriptionBlockText,
  DescriptionImageBlock,
  MainLayout,
  NavRoom,
  ReservationPolicy,
  ReviewBlock,
  Title,
} from "@/components/shared";
import { cardItem } from "@/lib/cardItem";
import { MAXWIDTH } from "@/lib/const-css";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Room({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;
  const room = cardItem.find((room) => room.id === Number(id));

  if (!room) {
    return notFound();
  }

  return (
    <MainLayout>
      {/* Блок опису*/}
      <Container className="max-w-[1390px]">
        <DescriptionImageBlock imageUrl={room.imageUrl} />
      </Container>

      <Container className="mb-[48px]">
        <DescriptionBlockText
          owner={room.owner}
          isRating={room.rating ? true : false}
          raiting={room.rating?.rating ?? 0}
          reviews={room.reviews}
          location={room.location}
          description={room.description}
        />
      </Container>

      {/* Блок навігації*/}
      <Container className={cn(MAXWIDTH, "sticky top-0 z-300 bg-white")}>
        <Container>
          <NavRoom />
        </Container>
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Наявність і тарифи*/}
      <Container className="mt-[53px]">
        <AvailabilityBlock rooms={room.rooms} />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Зручності*/}
      <Container className="mt-[53px]">
        <ConvenienceBlock comforts={room.comfort} imageUrl={room.imageUrl} />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Відгуки*/}
      <Container className="mt-[53px]">
        <Title text="Відгуки" size="lg" className="font-medium mb-5.5" />
        <ReviewBlock rating={room?.rating} reviews={room?.reviewsList} />
      </Container>

      <div className={cn(MAXWIDTH, "border-2 border-b mx-auto")}></div>

      {/* Блок Політики бронювання*/}
      <Container className="mt-[53px]">
        <ReservationPolicy />
      </Container>
    </MainLayout>
  );
}
