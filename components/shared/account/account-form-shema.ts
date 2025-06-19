import { z } from "zod";

export const accountFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Ім'я має містити не менше 2 символів" }),
  lastName: z
    .string()
    .min(2, { message: "Прізвище має містити не менше 2 символів" }),
  email: z.string().email({ message: "Невірно введено пошту" }),
  password: z
    .string()
    .min(6, { message: "Пароль має містити не менше 6 символів" }),
  notifications: z.object({
    booking: z.object({
      email: z.boolean().optional(),
      sms: z.boolean().optional(),
    }),
    reminders: z.object({
      email: z.boolean().optional(),
      sms: z.boolean().optional(),
    }),
    updates: z.object({
      email: z.boolean().optional(),
    }),
  }),
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;
