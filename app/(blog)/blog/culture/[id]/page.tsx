import {
  BlogBanner,
  BlogCategoryLayout,
  BlogContentRenderer,
  BlogSlugLink,
  Container,
  NavBlog,
} from "@/components/shared";
import { blogItems } from "@/lib/blogItem";
import { MAXWIDTH } from "@/lib/const-css";

import { notFound } from "next/navigation";

export default async function BlogCulturePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogItems.find((item) => item.id === Number(id));

  if (!blog) {
    return notFound();
  }

  return (
    <BlogCategoryLayout>
      <Container className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </Container>
      <Container
        className={`${MAXWIDTH} h-[500px] max-h-[500px] mx-auto bg-primary`}
      >
        <BlogBanner item={blog} isBlogSlug={true} />
      </Container>
      <Container className="mt-[520px] flex gap-5 flex-col">
        <BlogContentRenderer blog={blog} variant="culture" />
      </Container>
      <Container className="flex items-center justify-center flex-col gap-2.5 mt-6">
        <BlogSlugLink className="rounded-full bg-primary p-1 hover:scale-110 duration-200 ease-out hover:bg-primary-hover hover:cursor-pointer" />
      </Container>
    </BlogCategoryLayout>
  );
}
