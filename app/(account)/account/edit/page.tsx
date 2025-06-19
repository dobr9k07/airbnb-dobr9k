"use client";
import {
  AccountLayout,
  Container,
  FormInput,
  NotificationSection,
  Title,
} from "@/components/shared";
import {
  accountFormSchema,
  AccountFormValues,
} from "@/components/shared/account/account-form-shema";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

export default function AccountEdit() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      notifications: {
        booking: {
          email: false,
          sms: false,
        },
        reminders: {
          email: false,
          sms: false,
        },
        updates: {
          email: false,
        },
      },
    },
  });

  return (
    <AccountLayout>
      <Container>
        <div className="flex flex-col mt-7 mb-12 gap-5">
          <Title
            text={"Налаштування акаунта та повідомлень"}
            size="lg"
            className="font-normal"
          />
          <p className="text-2xl font-light">
            <span>Оновити обліковий запис</span>
            <br />
            <span>
              Ви можете оновити свою контактну інформацію та пароль тут.
            </span>
          </p>
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              console.log("Form submitted with data:", data);
            })}
          >
            <div className="flex flex-col gap-5 w-[75%]">
              <div className="grid grid-cols-2 gap-5">
                <FormInput name="firstName" label="Ім'я" />
                <FormInput name="lastName" label="Прізвище" />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <FormInput name="email" label="Адреса електронної пошти" />

                <FormInput name="password" label="Пароль" />

                <NotificationSection
                  title={"Налаштування сповіщень"}
                  descriptionHeader={"Оновлення бронювання"}
                  descriptionFooter={
                    "Отримуйте оновлення щодо вашого бронювання та запитів на ранній/пізній заїзд."
                  }
                  fields={[
                    {
                      name: "notifications.booking.email",
                      label: "Електронна пошта",
                    },
                    { name: "notifications.booking.sms", label: "СМС" },
                  ]}
                />

                <NotificationSection
                  title={"Нагадування та рекомендації"}
                  descriptionFooter={
                    "Отримуйте нагадування про бронювання, поради щодо подорожей та рекомендації, що стосуються вашого перебування."
                  }
                  fields={[
                    {
                      name: "notifications.reminders.email",
                      label: "Електронна пошта",
                    },
                    { name: "notifications.reminders.sms", label: "СМС" },
                  ]}
                />

                <NotificationSection
                  title={"Оновлення hata"}
                  descriptionFooter={
                    "Отримуйте оновлення про останні новини Sonder, запуски міських пропозицій та ексклюзивні пропозиції."
                  }
                  fields={[
                    {
                      name: "notifications.updates.email",
                      label: "Електронна пошта",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <Button
                type="submit"
                className="rounded-[16px] h-8.25 w-[470px] text-base font-light text-white "
              >
                Зберегти оновлений обліковий запис
              </Button>
            </div>
          </form>
        </FormProvider>
      </Container>
    </AccountLayout>
  );
}
