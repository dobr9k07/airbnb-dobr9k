import { z } from "zod";

export const schema = z.object({
  dateRange: z.object({
    from: z.date({ required_error: "Оберіть початкову дату" }),
    to: z.date({ required_error: "Оберіть кінцеву дату" }),
  }),
  city: z.string({ required_error: "Оберіть місто" }),
  guests: z.number({ required_error: "Оберіть кількість гостей" }),
});

export type FormValues = z.infer<typeof schema>;
