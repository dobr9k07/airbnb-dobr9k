import {
  BlogSlugLayout,
  Container,
  HeroBlog,
  NavBlog,
} from "@/components/shared";

import { blogItems } from "@/lib/item/blogItem";
import { MAXWIDTH } from "@/constans/const-css";
import { BLOG_CATEGORIES } from "@/constans/blog-categories";

export default function TravelPage() {
  const tag = BLOG_CATEGORIES.find((item) => item.id === "travel");

  const itemsList = blogItems.filter((item) => item.tag === tag?.name);

  return (
    <BlogSlugLayout>
      <div className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </div>
      <Container
        className={`${MAXWIDTH} h-[200px] max-h-[300px] mx-auto bg-primary`}
      ></Container>
      <Container className="mt-[-150px]">
        <section>
          <HeroBlog
            className="w-full"
            items={itemsList}
            isActiveButton={false}
            isBlogPage={true}
          />
        </section>
      </Container>
    </BlogSlugLayout>
  );
}
