import { Container } from "@/components/shared";
import { ResetPasswordForm } from "@/components/shared/auth/reset-password-form";
import { MAXWIDTH } from "@/constans/const-css";
import { cn } from "@/lib/utils";

export default function ResetPasswordPage() {
  return (
    <Container
      className={cn(
        "h-screen flex items-center justify-center bg-[url(/svg/IconPaterPrimary.svg)] bg-center",
        MAXWIDTH
      )}
    >
      <ResetPasswordForm />
    </Container>
  );
}
