import {
  CategoryCarousel,
  Container,
  DialogFilter,
  HomeButtonSwitch,
  ListingCardWithCarousel,
  MiniBaner,
} from "@/components/shared";

import { cardItem } from "@/lib/cardItem";

export default function Home() {
  return (
    <>


      <Container className="flex gap-6 items-center m-10 flex-wrap">
        {cardItem.map((item) => (
          <ListingCardWithCarousel
            key={item.id}
            id={item.id}
            location={item.location}
            imageUrls={item.imageUrl}
            date={item.date}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Container>

      <HomeButtonSwitch />
    </>
  );
}
