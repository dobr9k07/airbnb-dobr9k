import { Container } from "@/components/shared";
import { RegisterForm } from "@/components/shared/auth/register-form";
import { MAXWIDTH } from "@/constans/const-css";
import { cn } from "@/lib/utils";

export default function SignOutPage() {
  return (
    <Container
      className={cn(
        "h-screen flex items-center justify-center bg-[url(/svg/IconPaterPrimary.svg)] bg-center",
        MAXWIDTH
      )}
    >
      <RegisterForm />
    </Container>
  );
}
