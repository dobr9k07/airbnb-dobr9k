import { AboutITems, Container, HeroBanner, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { aboutItems } from "@/lib/aboutItem";
import { MAXWIDTH } from "@/lib/const-css";
import image from "@/public/about/imageAbout_1.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <HeroBanner isAboutPage={true} />
      <AboutITems items={aboutItems.slice(0, 2)} />
      <Container className={`${MAXWIDTH} mx-auto mt-30.25 mb-6`}>
        <Image src={image} alt="image" className="w-full mx-auto" />
      </Container>
      <AboutITems items={aboutItems.slice(2, aboutItems.length)} />
      <Container className="flex flex-col items-start gap-1.75 text-black">
        <Title text={"Працюйте з нами"} size="2lg" />
        <p className="text-[15px] font-light max-w-[450px]">
          Ми сподіваємося стати найбільш шанованим брендом гостинності у світі.
          Допоможіть нам досягти цього.
        </p>
        <Button className="rounded-[38px] mt-[28px] h-17 text-xl font-light text-white leading-[24px] pl-[38px] pr-[38px] pt-[22px] pb-[22px]">
          Переглянути вакансії
        </Button>
      </Container>
    </>
  );
}
