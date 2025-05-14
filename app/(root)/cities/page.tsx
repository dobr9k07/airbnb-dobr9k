import { CityBanner } from "@/components/shared";
import { cartCityItems } from "@/lib/cartCityItem";

export default function CitiesPage() {
  return <CityBanner className="mt-11" items={cartCityItems} isCitiesPage={true}/>;
}
