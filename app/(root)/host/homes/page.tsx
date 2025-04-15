import { Header, Title } from "@/components/shared";

export default function HomesPage() {
  return (
    <>
      <Header isHomePage={false} />
      <Title
        text="Ваше помешкання може приносити вам дохід на Airbnb"
        size="xl"
      />
    </>
  );
}
