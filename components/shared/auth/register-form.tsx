'use client';

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  formRegisterSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  TFormRegisterValues,
} from "./shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Title } from "../title";
import { Button } from "@/components/ui/button";
import { FormInput } from "../form";

interface Props {
  className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
    },
    mode: "onChange", // Валідація при зміні
  });

  const steps = [
    {
      title: "Реєстрація",
      subtitle: "Як вас звати?",
      fields: ["fullName", "phone"],
      schema: step1Schema,
    },
    {
      title: "Реєстрація",
      subtitle: "Адрес електронної пошти",
      fields: ["email", "password", "confirmPassword"],
      schema: step2Schema,
    },
    {
      title: "Реєстрація",
      subtitle: "Підтвердіть адресу електронної пошти через код",
      fields: ["verificationCode"],
      schema: step3Schema,
    },
    {
      title: "Успішно",
      subtitle: "Реєстрацію завершено.",
      isSuccess: true,
    },
  ];

  const validateCurrentStep = async () => {
    const currentStepData = steps[currentStep];
    if (currentStepData.isSuccess || !currentStepData.schema) return true;

    // Отримуємо тільки поля поточного кроку
    const currentValues = form.getValues();
    const stepData: any = {};

    currentStepData.fields!.forEach((field) => {
      stepData[field] = currentValues[field as keyof TFormRegisterValues];
    });

    try {
      await currentStepData.schema.parseAsync(stepData);
      return true;
    } catch (error: any) {
      // Встановлюємо помилки для поточних полів
      if (error.errors) {
        error.errors.forEach((err: any) => {
          form.setError(err.path[0] as keyof TFormRegisterValues, {
            message: err.message,
          });
        });
      }
      return false;
    }
  };

  const onSubmit = async (data: TFormRegisterValues) => {
    console.log("Form submitted with data:", data);
    console.log("Current step:", currentStep);

    // Валідуємо тільки поточний крок
    const isValid = await validateCurrentStep();

    if (!isValid) {
      console.log("Current step validation failed");
      return;
    }

    if (currentStep < steps.length - 2) {
      // Очищуємо помилки перед переходом на наступний крок
      form.clearErrors();
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Final submission:", data);
      setCurrentStep(steps.length - 1);
    }
  };

  const handleNextClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentValues = form.getValues();
    console.log("Button clicked! Current values:", currentValues);

    const isValid = await validateCurrentStep();

    if (isValid) {
      onSubmit(currentValues);
    } else {
      console.log("Validation failed for current step");
    }
  };

  const renderProgressDots = () => {
    if (steps[currentStep].isSuccess) return null;

    return (
      <div className="flex items-center justify-center mb-6">
        {[0, 1, 2].map((dot, index) => (
          <div key={dot} className="flex items-center">
            {/* Dot */}
            <div
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-200",
                dot <= currentStep ? "bg-blue-500" : "bg-gray-300"
              )}
            />
            {/* Line connecting to next dot */}
            {index < 2 && (
              <div
                className={cn(
                  "w-12 h-0.5 transition-colors duration-200",
                  dot < currentStep ? "bg-blue-500" : "bg-gray-300"
                )}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderFields = () => {
    const step = steps[currentStep];

    if (step.isSuccess) {
      return (
        <div className="flex flex-col items-center text-center gap-5">
          <div className="text-sm font-extralight w-8/12">
            <p>
              Реєстрацію завершено. Натисніть “Завершити”, щоб увійти до
              системи.
            </p>
          </div>

          <CheckCircle className="w-45 h-45 text-black" />
        </div>
      );
    }

    const labels: Record<string, string> = {
      fullName: "Як вас звати?",
      phone: "Введіть номер телефону:",
      email: "Введіть email:",
      password: "Введіть пароль:",
      confirmPassword: "Підтвердіть пароль:",
      verificationCode: "Код підтвердження з пошти:",
    };

    const types: Record<string, string> = {
      phone: "tel",
      email: "email",
      password: "password",
      confirmPassword: "password",
      verificationCode: "text",
      fullName: "text",
    };

    const autocompleteValues: Record<string, string> = {
      fullName: "name",
      phone: "tel",
      email: "email",
      password: "new-password",
      confirmPassword: "new-password",
      verificationCode: "one-time-code",
    };

    return (
      <div className="space-y-4 mb-6">
        {step.fields!.map((field) => (
          <div key={field}>
            <FormInput
              name={field}
              label={labels[field]}
              type={types[field]}
              autoComplete={autocompleteValues[field]}
              required
              className="text-sm font-extralight"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <Title
          text={steps[currentStep].title}
          size="md"
          className="font-semibold text-black text-center"
        />
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form onSubmit={handleNextClick} className="flex flex-col gap-4">
            {renderFields()}

            {renderProgressDots()}

            {!steps[currentStep].isSuccess && (
              <Button type="submit" className="h-12 text-base mb-8">
                Далі
              </Button>
            )}
          </form>
        </FormProvider>
      </CardContent>
      {steps[currentStep].isSuccess && (
        <CardFooter className="flex justify-center mb-8">
          <Button
            onClick={() => console.log("Done")}
            className="text-2xl font-normal px-43"
          >
            Далі
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
