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
      <Container className="mt-10 flex justify-items-center items-center gap-16">
        <CategoryCarousel
          isCard={false}
          className="w-full max-w-[1100px] ml-10"
          opts={{ align: "start", slidesToScroll: 5 }}
        />
        <div className="flex gap-3">
          {/* <DialogFilter /> */}
          <MiniBaner title="Ціни охоплюють усі" />
        </div>
      </Container>

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
