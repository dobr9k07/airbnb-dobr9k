import { Container, NavBlog } from "@/components/shared";
import { MAXWIDTH } from "@/lib/const-css";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={`${MAXWIDTH} bg-primary mx-auto`}>
        <Container>
          <NavBlog />
        </Container>
      </div>
      {children}
    </>
  );
}
