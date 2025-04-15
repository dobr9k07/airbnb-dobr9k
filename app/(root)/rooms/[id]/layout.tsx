import { Header } from "@/components/shared";

export default function RoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className="max-w-[1200px]" />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
