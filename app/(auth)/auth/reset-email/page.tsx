import { Container } from "@/components/shared";
import { ResetEmailForm } from "@/components/shared/auth/reset-email-form";
import { MAXWIDTH } from "@/constans/const-css";
import { cn } from "@/lib/utils";

export default function ResetEmailPage() {
  return (
    <Container
      className={cn(
        "h-screen flex items-center justify-center bg-[url(/svg/IconPaterPrimary.svg)] bg-center",
        MAXWIDTH
      )}
    >
      <ResetEmailForm />
    </Container>
  );
}
