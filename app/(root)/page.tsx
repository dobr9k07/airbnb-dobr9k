import {
  CardBlog,
  CarouselContentWithPositions,
  CityBanner,
  Container,
  FilterHero,
  HeroBanner,
  HeroBlog,
  MainLayout,
  Title,
} from "@/components/shared";
import { CarouselPagination } from "@/components/shared/carousel-pagination";
import { CarouselItem } from "@/components/ui/carousel";
import { blogItems } from "@/lib/item/blogItem";
import { cartCityItems } from "@/lib/item/cartCityItem";
import { commentItem } from "@/lib/item/commentItem";

export default function Home() {
  return (
    <MainLayout isSticky={true}>
      <HeroBanner />

      <FilterHero className="bg-white mt-[-55px] z-50 relative rounded-t-[38px] p-5.5" />

      <CityBanner className="mb-[82px]" items={cartCityItems.slice(0, 5)} />

      <Container>
        <section className="max-sm:pl-[35px]">
          <div className="flex flex-col w-full">
            <Title text={`Кожен відпочинок - це історія`} size="lg" />
            <p className="text-[25px] font-light mb-21.75">
              Подивіться, &mdash; що кажуть наші гості.
            </p>

            <CarouselPagination
              content={
                <>
                  <CarouselContentWithPositions>
                    {commentItem.map((item) => (
                      <CarouselItem
                        key={item.id}
                        className="flex justify-center items-center basis-1/3 max-sm:basis-11/12"
                      >
                        <div className="w-[354px] h-75 flex flex-col items-start justify-start comment-gradient comment-gradient-mobile">
                          <p className="text-xl font-light pl-4 pr-4 pt-10.75 pb-5.25">
                            {item.text}
                          </p>
                          <p className="text-xl font-normal pl-4">
                            {item.author}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContentWithPositions>
                </>
              }
            />
          </div>
        </section>
      </Container>

      <Container>
        <section className="max-sm:pl-[35px]">
          <Title
            text={`Історії hata`}
            size="lg"
            className="mb-3.5 max-sm:hidden"
          />
          <Title
            text={`Історії hata`}
            size="md"
            className="mb-3.5 font-medium sm:hidden mt-4"
          />
          <p className="text-[25px] font-light mb-9.25 max-sm:text-xl max-sm:font-normal">
            Від новин до натхнення для подорожей — дізнавайтесь більше про світ
            з hata
          </p>
          <HeroBlog className="w-full max-sm:hidden" items={blogItems} />
          <CarouselPagination
            className="sm:hidden max-sm:pl-0"
            content={
              <>
                <CarouselContentWithPositions>
                  {blogItems.slice(0, 4).map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="flex justify-center items-center basis-11/12"
                    >
                      <CardBlog key={item.id} items={item} isBlogPage={false} />
                    </CarouselItem>
                  ))}
                </CarouselContentWithPositions>
              </>
            }
          />
        </section>
      </Container>
    </MainLayout>
  );
}
