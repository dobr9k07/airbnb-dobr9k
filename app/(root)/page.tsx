import { CityBanner, FilterHero, HeroBanner } from "@/components/shared";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <FilterHero className="bg-white mt-[-55px] z-50 relative rounded-[38px] p-5.5 border-1 border-amber-400" />

      <CityBanner />
    </>
  );
}
