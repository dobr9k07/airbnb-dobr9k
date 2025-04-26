import { Header, Title } from "@/components/shared";

export default function HomesPage() {
  return (
    <>
      <Header isHomePage={false} className="max-w-[1728px]" />
      <Title
        text="Ваше помешкання може приносити вам дохід на Airbnb"
        size="xl"
      />
    </>
  );
}
