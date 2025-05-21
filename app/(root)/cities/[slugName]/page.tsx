import { Container, ListingCardWithCarousel, PaginationPrimary } from "@/components/shared";
import { cardItem } from "@/lib/cardItem";

export default function Page() {
  return (
    <Container>
      <div className="w-full max-w-[910px] flex gap-5 flex-wrap mb-17.5">
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
      <div className="w-full flex justify-center">
        <PaginationPrimary />
      </div>
    </Container>
  );
}
