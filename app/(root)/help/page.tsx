import { Container, HelpLayout, Title } from "@/components/shared";
import { SearchInputHelp } from "@/components/shared/search-input";
import { Button } from "@/components/ui/button";
import { questionAnswerItems } from "@/lib/item/questionAnswerItems";

const kontaktList = [
  "Служба підтримки: працює цілодобово, доступна через додаток або за телефоном.",
  "Електронна пошта: hata@gmail.comm",
  "Телефон: +1 617-300-0956",
];

export default function HelpPage() {
  return (
    <HelpLayout>
      <Container>
        <div className="w-full flex flex-col items-center justify-center gap-5 ">
          <Title text="Потрібна допомога?" size="2xl" />
          <SearchInputHelp
            placeholder="Пошук потрібних статтей"
            className="w-[460px] h-[51px] mb-10.5"
          />

          {/*questions*/}
          <section className="flex flex-col w-full gap-7.25">
            <Title text="Найпопулярніші статті" size="2lg" />
            <div className="flex flex-wrap gap-x-19.5 gap-y-11">
              {questionAnswerItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3.75 w-91.5">
                  <Title
                    text={item.question}
                    size="sm"
                    className="font-semibold"
                  />
                  <p className="text-xl font-light">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col w-full gap-5 mt-5">
            <Title text="Контакти" size="2lg" />
            <ul className="list-disc pl-10">
              {kontaktList.map((item, index) => (
                <li key={index} className="text-2xl ">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Button className="rounded-[39px] mt-[66px] h-12.75 w-[300px] text-xl text-white leading-[24px] pl-[38px] pr-[38px] pt-[22px] pb-[22px]">
            Зв’язатися з нами
          </Button>
        </div>
      </Container>
    </HelpLayout>
  );
}
