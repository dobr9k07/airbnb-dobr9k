import { Container, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cardItem } from "@/lib/cardItem";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { FiShare } from "react-icons/fi";

export default async function Room({
  params: { id },
}: {
  params: { id: string };
}) {
  const room = cardItem.find((room) => room.id === Number(id));

  if (!room) {
    return notFound();
  }
  return (
    <>
      <Container className="max-w-[1200px] flex justify-between items-center container mx-auto px-1 lg:px-10 py-5">
        <Title text={room?.description} size="lg" />
        <div className="flex items-center gap-1">
          <Button
            variant={"ghost"}
            className="cursor-pointer underline underline-offset-1"
          >
            <FiShare /> Поділитися
          </Button>
          <Button
            variant={"ghost"}
            className="cursor-pointer underline underline-offset-1"
          >
            <Heart className="w-4 h-4" />
            Зберегти
          </Button>
        </div>
      </Container>
    </>
  );
}
