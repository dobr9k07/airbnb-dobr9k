import { Container, HeroBlog } from "@/components/shared";
import { BLOG_CATEGORIES } from "@/components/shared/blog/blog-link";
import { blogItems } from "@/lib/blogItem";
import { MAXWIDTH } from "@/lib/const-css";

export default function TravelPage() {
  const tag = BLOG_CATEGORIES.find((item) => item.id === "travel");

  console.log("tag", tag);

  const itemsList = blogItems.filter((item) => item.tag === tag?.name);

  console.log("itemsList", itemsList);

  return (
    <>
      <Container
        className={`${MAXWIDTH} h-[200px] max-h-[300px] mx-auto bg-primary`}
      ></Container>
      <Container className="mt-[-150px]">
        <section>
          <HeroBlog className="w-full" items={itemsList} isActiveButton={false} isBlogPage={true} />
        </section>
      </Container>
    </>
  );
}
