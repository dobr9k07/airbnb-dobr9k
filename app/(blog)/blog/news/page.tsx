import { BlogSlugLayout, Container, NavBlog } from "@/components/shared";
import { MAXWIDTH } from "@/constans/const-css";
import { notFound } from "next/navigation";

export default function NewsPage() {
  notFound();
  return (
    <BlogSlugLayout>
      <div className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </div>
      <h1 className="text-2xl font-bold">Travel Blog</h1>
    </BlogSlugLayout>
  );
}
