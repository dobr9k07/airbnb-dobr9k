import {
  Container,
  ListingCardWithCarousel,
  PaginationPrimary,
} from "@/components/shared";
import { Map } from "@/components/shared/map/map";
import { cardItem } from "@/lib/cardItem";

export default function Page() {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="w-9/12 flex justify-center gap-5 flex-wrap mb-17.5">
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
        <div className="w-3/12 h-[60vh]">
          <Map />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <PaginationPrimary />
      </div>
    </Container>
  );
}
