"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TFormResetEmail } from "./shemas";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Title } from "../title";
import { FormInput } from "../form";
import { Button } from "@/components/ui/button";
import { sendResetPasswordEmail } from "@/app/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const ResetEmailForm: React.FC<Props> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<TFormResetEmail>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: TFormResetEmail) => {
    setIsLoading(true);
    try {
      await sendResetPasswordEmail(data.email);
      toast.success("Лист для відновлення пароля відправлено на вашу пошту.");
    } catch (error) {
      console.log("RESET EMAIL FORM ERROR", error);
      toast.error("Щось пішло не так. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
      router.push("/");
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
                type="email"
                label="Введіть свій email:"
                className="text-sm font-extralight"
                autoComplete="email"
                required
              />
              <Button
                className="h-12 text-2xl font-normal text-white mb-8"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Відправлення..." : "Відправити"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </Container>
  );
};
