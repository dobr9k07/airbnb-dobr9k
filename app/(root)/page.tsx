import {
  CityBanner,
  Container,
  FilterHero,
  HeroBanner,
  HeroBlog,
  MainLayout,
  Title,
} from "@/components/shared";
import { CarouselPagination } from "@/components/shared/carousel-pagination";
import { blogItems } from "@/lib/item/blogItem";
import { cartCityItems } from "@/lib/item/cartCityItem";

export default function Home() {
  return (
    <MainLayout isSticky={true}>
      <HeroBanner />

      <FilterHero className="bg-white mt-[-55px] z-50 relative rounded-t-[38px] p-5.5" />

      <CityBanner className="mb-[82px]" items={cartCityItems.slice(0, 5)} />

      <Container>
        <section>
          <div className="flex flex-col w-full">
            <Title text={`Кожен відпочинок - це історія`} size="lg" />
            <p className="text-[25px] font-light mb-21.75">
              Подивіться, &mdash; що кажуть наші гості.
            </p>

            <CarouselPagination />
          </div>
        </section>
      </Container>

      <Container>
        <section>
          <Title text={`Історії hata`} size="lg" className="mb-3.5" />
          <p className="text-[25px] font-light mb-9.25">
            Від новин до натхнення для подорожей — дізнавайтесь більше про світ
            з hata
          </p>
          <HeroBlog className="w-full" items={blogItems} />
        </section>
      </Container>
    </MainLayout>
  );
}
