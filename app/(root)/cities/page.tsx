import { CityBanner, MainLayout } from "@/components/shared";
import { cartCityItems } from "@/lib/item/cartCityItem";

export default function CitiesPage() {
  return (
    <MainLayout>
      <CityBanner className="mt-11" items={cartCityItems} isCitiesPage={true} />
    </MainLayout>
  );
}
