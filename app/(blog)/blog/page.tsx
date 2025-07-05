import {
  Container,
  BlogBanner,
  HeroBlog,
  BlogLayout,
  NavBlog,
} from "@/components/shared";
import { blogItems } from "@/lib/item/blogItem";
import { MAXWIDTH } from "@/constans/const-css";

export default function BlogPage() {
  return (
    <BlogLayout>
      <Container className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </Container>
      <Container
        className={`${MAXWIDTH} h-[500px] max-h-[500px] mx-auto bg-primary `}
      >
        <div className="w-full flex justify-center items-center">
          <BlogBanner item={blogItems[0]} />
        </div>
      </Container>

      <Container className="mt-[313px] ">
        <section>
          <HeroBlog className="w-full" items={blogItems} isBlogPage={true} />
        </section>
      </Container>
    </BlogLayout>
  );
}
