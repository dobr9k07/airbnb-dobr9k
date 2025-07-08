"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "../container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Title } from "../title";
import { FormInput } from "../form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AuthLink } from "../auth-link";

interface Props {
  className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
            text="Вхід в систему"
            className="text-center font-semibold"
            size="md"
          />
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="flex flex-col gap-4"
            >
              <FormInput
                name="email"
                label="Введіть свій номер телефону або email:"
                className="text-sm font-extralight"
                autoComplete="email"
                required
              />
              <FormInput
                name="password"
                label="Введіть пароль:"
                type="password"
                className="text-sm font-extralight"
                autoComplete="password"
                required
              />

              <Button
                className="h-12 text-2xl font-normal text-white"
                type="submit"
              >
                Увійти
              </Button>
            </form>
          </FormProvider>
          <p className="text-sm font-extralight text-center mt-4">
            Ще не маєте акаунта?
            <Link href="/auth/register">
              <span> Зареєструйтеся!</span>
            </Link>
          </p>
          <div className="my-7 relative items-center flex">
            <Separator className="bg-black" />
            <span className="absolute inset-x-0 flex justify-center">
              <span className="bg-white text-sm px-1 whitespace-nowrap">
                або увійти за допомогою
              </span>
            </span>
          </div>
        </CardContent>
        <CardFooter className="bg-primary h-32.5 rounded-b-xl border border-primary items-center flex justify-center">
          <AuthLink className="flex items-center px-7 bg-primary-hover rounded-xl hover:scale-110 duration-300 transform-all hover:cursor-pointer" />
        </CardFooter>
      </Card>
    </Container>
  );
};
