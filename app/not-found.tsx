import { Footer, Header } from "@/components/shared";

export default function NotFound() {
  return (
    <>
      <Header is404={true} className="mx-auto" />
      <h1 className="text-3xl font-bold underline mx-auto">404</h1>
      <Footer className="mx-auto" is404={true} />
    </>
  );
}
