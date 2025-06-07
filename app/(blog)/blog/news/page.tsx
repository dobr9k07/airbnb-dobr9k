import { BlogSlugLayout, Container, NavBlog } from "@/components/shared";
import { MAXWIDTH } from "@/lib/const-css";

export default function NewsPage() {
  return (
    <BlogSlugLayout>
      <div className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </div>
      <h1 className="text-2xl font-bold">Travel Blog</h1>;
    </BlogSlugLayout>
  );
}
