"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TFormResetPassword } from "./shemas";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Title } from "../title";
import { FormInput } from "../form";
import { Button } from "@/components/ui/button";
import { resetPassword, sendResetPasswordEmail } from "@/app/actions";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

export const ResetPasswordForm: React.FC<Props> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const form = useForm<TFormResetPassword>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange", // Валідація при зміні
  });

  const onSubmit = async (data: TFormResetPassword) => {
    setIsLoading(true);
    try {
      await resetPassword(data.email, data.password, code!);
      toast.success("Пароль успішно змінено.");
      router.push("/auth/login");
    } catch (error) {
      console.log("RESET EMAIL FORM ERROR", error);
      toast.error("Щось пішло не так. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      className={cn(
        "flex items-center justify-center w-[450px] bg-white z-10",
        className
      )}
    >
      <Card className="w-full max-w-md pb-0">
        <CardHeader>
          <Title
            text="Відновлення пароля"
            className="text-center font-semibold"
            size="md"
          />
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormInput
                name="email"
                label="Введіть свій email:"
                type="email"
                className="text-sm font-extralight"
                autoComplete="email"
                required
              />
              <FormInput
                name="password"
                label="Введіть новий пароль:"
                type="password"
                className="text-sm font-extralight"
                autoComplete="password"
                required
              />
              <FormInput
                name="confirmPassword"
                label="Введіть пароль ще раз:"
                type="password"
                className="text-sm font-extralight"
                autoComplete="password"
                required
              />
              <Button
                className="h-12 text-2xl font-normal text-white mb-8"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Відновлення пароля..." : "Відновити пароль"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </Container>
  );
};
