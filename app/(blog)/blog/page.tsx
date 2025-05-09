import { Container, BlogBanner, HeroBlog } from "@/components/shared";
import { blogItems } from "@/lib/blogItem";
import { MAXWIDTH } from "@/lib/const-css";

export default function BlogPage() {
  return (
    <>
      <Container
        className={`${MAXWIDTH} h-[300px] max-h-[500px] mx-auto bg-primary`}
      >
        <BlogBanner item={blogItems[0]} />
      </Container>

      <Container className="mt-[313px] ">
        <section>
          <HeroBlog className="w-full" isBlogPage={true} />
        </section>
      </Container>
    </>
  );
}
