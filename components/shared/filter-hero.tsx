"use client";

import React from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./filterHero/filter-form-shema";
import { CityField, DateRangeField, GuestsField } from "./filterHero";
import { useSearchSubmit } from "@/hooks/use-search-submit";
import { Title } from "./title";

interface Props {
  className?: string;
}

const Divider = () => <div className="h-5 bg-black w-[0.25px] max-sm:hidden" />;

{
  /* Доробити відображення помилки валідації */
}
export const FilterHero: React.FC<Props> = ({ className }) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      dateRange: {
        from: undefined,
        to: undefined,
      },
      city: "",
      guests: 1,
    },
  });

  const onSubmit = useSearchSubmit();

  return (
    <Container className={className}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-[1210px] h-[83px] sm:bg-primary-white rounded-full flex items-center justify-between gap-5 px-8 max-sm:flex-col max-sm:w-full max-sm:h-auto"
        >
          <div className="h-full flex flex-col justify-center sm:hidden">
            <Title
              text={"Cучасне житло з готельним комфортом"}
              size="md"
              className="font-medium text-black"
            />
            <p className="text-xl font-normal text-black">
              де б ти не був. Тепер разом із <b>hata</b>
            </p>
          </div>

          <CityField />

          <Divider />

          <DateRangeField />

          <Divider />

          <GuestsField />

          <Button
            className="w-34 h-17 text-xl font-light rounded-full max-sm:h-8 max-sm:text-base"
            type="submit"
          >
            Пошук
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
