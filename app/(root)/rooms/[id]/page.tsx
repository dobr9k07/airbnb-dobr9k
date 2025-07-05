import { MainLayout, RoomBody } from "@/components/shared";
import { cardItem } from "@/lib/item/cardItem";
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
      <RoomBody room={room} />
    </MainLayout>
  );
}
