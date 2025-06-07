import {
  Container,
  BlogBanner,
  HeroBlog,
  BlogLayout,
  NavBlog,
} from "@/components/shared";
import { blogItems } from "@/lib/blogItem";
import { MAXWIDTH } from "@/lib/const-css";

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </div>
      <Container
        className={`${MAXWIDTH} h-[300px] max-h-[500px] mx-auto bg-primary`}
      >
        <BlogBanner item={blogItems[0]} />
      </Container>

      <Container className="mt-[313px] ">
        <section>
          <HeroBlog className="w-full" items={blogItems} isBlogPage={true} />
        </section>
      </Container>
    </BlogLayout>
  );
}
