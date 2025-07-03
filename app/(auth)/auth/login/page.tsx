"use client";

import { Container } from "@/components/shared";
import { LoginForm } from "@/components/shared/auth/login-form";
import { MAXWIDTH } from "@/lib/const-css";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  return (
    <Container
      className={cn(
        "h-screen flex items-center justify-center bg-[url(/svg/IconPaterPrimary.svg)] bg-center",
        MAXWIDTH
      )}
    >
      <LoginForm />
    </Container>
  );
}
