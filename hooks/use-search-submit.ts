import { FormValues } from "@/components/shared/filterHero/filter-form-shema";
import { cartCityItems } from "@/lib/item/cartCityItem";
import { useRouter } from "next/navigation";
import slugify from "slugify";

export const useSearchSubmit = () => {
  const router = useRouter();

  return (data: FormValues) => {
    const cityData = cartCityItems.find((c) => c.name === data.city);
    if (!cityData) return;

    const slugName = slugify(cityData.nameEn, { lower: true, strict: true });
    const { from, to } = data.dateRange;

    const params = new URLSearchParams({
      ...(from && { from: from.toISOString() }),
      ...(to && { to: to.toISOString() }),
      guests: data.guests.toString(),
    });

    router.push(`/cities/${slugName}?${params.toString()}`, { scroll: false });
  };
};
