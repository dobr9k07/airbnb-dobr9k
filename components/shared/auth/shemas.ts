import { z } from "zod";

import parsePhoneNumberFromString from "libphonenumber-js";

export const passwordSchema = z
  .string()
  .min(4, { message: "Пароль має містити не менше 6 символів" });

export const phoneSchema = z.string().refine(
  (val) => {
    const phone = val.startsWith("+")
      ? parsePhoneNumberFromString(val)
      : parsePhoneNumberFromString(val, "UA");
    return phone?.isValid() ?? false;
  },
  {
    message: "Введіть коректний номер телефону",
  }
);

export const resetEmailShema = z.object({
  email: z.string().email({ message: "Введіть коректну пошту" }),
});

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Введіть коректну пошту" }),
  password: passwordSchema,
});

// Схема для першого кроку
export const step1Schema = z.object({
  fullName: z.string().min(2, {
    message: "Ім'я має містити не менше 2 символів",
  }),
  phone: phoneSchema,
});

// Схема для другого кроку
export const step2Schema = z
  .object({
    email: z.string().email({ message: "Введіть коректну пошту" }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });

// Схема для третього кроку
export const step3Schema = z.object({
  verificationCode: z
    .string()
    .min(6, {
      message: "Код має містити не менше 6 символів",
    })
    .max(6, {
      message: "Код має містити не більше 6 символів",
    }),
});

// Повна схема для фінальної валідації
export const formRegisterSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Ім'я має містити не менше 2 символів",
    }),
    phone: phoneSchema,
    email: z.string().email({ message: "Введіть коректну пошту" }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    verificationCode: z
      .string()
      .min(6, {
        message: "Код має містити не менше 6 символів",
      })
      .max(6, {
        message: "Код має містити не більше 6 символів",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });

export const formresetPasswordSchema = z
  .object({
    email: z.string().email({ message: "Введіть коректну пошту" }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
export type TFormResetEmail = z.infer<typeof resetEmailShema>;
export type TFormResetPassword = z.infer<typeof formresetPasswordSchema>;
