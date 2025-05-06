import {
  CityBanner,
  Container,
  FilterHero,
  HeroBanner,
  Title,
} from "@/components/shared";
import { CarouselPagination } from "@/components/shared/carousel-pagination";


export default function Home() {
  return (
    <>
      <HeroBanner />

      <FilterHero className="bg-white mt-[-55px] z-50 relative rounded-[38px] p-5.5 border-1 border-amber-400" />

      <CityBanner />

      <Container>
        <div className="flex flex-col w-full">
          <Title
            text={`Кожен відпочинок - це історія`}
            size="lg"
            
          />
          <p className="text-[25px] font-light mb-21.75">
            Подивіться, &mdash; що кажуть наші гості.
          </p>

          <CarouselPagination />
        </div>
      </Container>
    </>
  );
}
