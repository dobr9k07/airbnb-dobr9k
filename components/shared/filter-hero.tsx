"use client";

import React from "react";
import { Container } from "./container";
import { SearchInput } from "./search-input";
import { Button } from "../ui/button";
import { z } from "zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateRangePicker } from "./date-range-picker";
import { MoveRight } from "lucide-react";
import { useCounter } from "@/hooks";
import { Counter } from "./counter";
import { GuestsIcon } from "./svg-components";

interface Props {
  className?: string;
}

export const FilterHero: React.FC<Props> = ({ className }) => {
  const { count, onClick } = useCounter();

  const schema = z.object({
    dateRange: z.object({
      from: z.date({ required_error: "Оберіть початкову дату" }),
      to: z.date({ required_error: "Оберіть кінцеву дату" }),
    }),
  });

  type FormValues = z.infer<typeof schema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      dateRange: {
        from: undefined,
        to: undefined,
      },
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Вибрані дати:", data.dateRange);
  };

  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <Container className={className}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-[1210px] h-[83px] bg-primary-white rounded-full flex items-center justify-between gap-5 px-8"
        >
          <SearchInput
            placeholder="Виберіть місто"
            className="w-89 h-17"
            isHover={true}
          />

          <div className="h-5 bg-black w-[0.25px]"></div>

          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <DateRangePicker
                className="w-[285px] h-17 hover:bg-primary"
                value={field.value}
                onChange={field.onChange}
                content={
                  <>
                    <span className="text-xl font-light text-black group-hover:text-white">
                      Заїзд
                    </span>
                    <MoveRight
                      width={17}
                      height={17}
                      className="text-black group-hover:text-white stroke-current"
                    />
                    <span className="text-xl font-light text-black group-hover:text-white">
                      Виїзд
                    </span>
                  </>
                }
                error={!!errors.dateRange}
              />
            )}
          />

          <div className="h-5 bg-black w-[0.25px]"></div>

          <Counter
            value={count}
            onChange={onClick}
            content={
              <>
                <GuestsIcon className="mr-0" />
                <p className="text-xl text-black font-light">Гості</p>
              </>
            }
          />

          <Button
            className="w-34 h-17 text-xl font-light rounded-full"
            type="submit"
          >
            Пошук
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
