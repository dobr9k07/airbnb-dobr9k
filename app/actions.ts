"use server";

import { ResetPasswordTemplate } from "@/components/shared/auth/reset-password-template";
import { VerificationUserTemplate } from "@/components/shared/auth/verification-user-template";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcryptjs";

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: { email: body.email },
    });
    if (user) {
      if (!user.verified) {
        throw new Error(
          "Користувач з таким email вже існує, але він не підтверджений. Перевірте вашу пошту."
        );
      }
      throw new Error("Користувач з таким email вже існує");
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      "Код підтвердження",
      await VerificationUserTemplate({ code })
    );
  } catch (error) {
    console.log("REGISTER USER ERROR", error);
    throw error;
  }
}

export async function verifyUser(code: string) {
  try {
    if (!code) {
      throw new Error("Код не знайдено!");
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: { code },
    });

    if (!verificationCode) {
      throw new Error("Невірний код підтвердження!");
    }

    await prisma.user.update({
      where: { id: verificationCode.userId },
      data: { verified: new Date() },
    });

    await prisma.verificationCode.delete({
      where: { id: verificationCode.id },
    });
  } catch (error) {
    console.log("VERIFY USER ERROR", error);
    throw error;
  }
}

export async function sendResetPasswordEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new Error("Користувача з таким email не існує");
    }

    // Видаляємо старі коди для цього юзера
    await prisma.verificationCode.deleteMany({
      where: { userId: user.id },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: user.id,
      },
    });

    await sendEmail(
      user.email,
      "Відновлення пароля",
      await ResetPasswordTemplate({
        code: code,
      })
    );
  } catch (error) {
    console.log("SEND RESET PASSWORD USER ERROR", error);
    throw error;
  }
}

export async function resetPassword(
  email: string,
  password: string,
  code: string
) {
  try {
    const verificationCode = await prisma.verificationCode.findFirst({
      where: { code },
      include: { user: true },
    });

    if (!verificationCode) {
      throw new Error("Невірний або прострочений код");
    }
    if (verificationCode.user.email !== email) {
      throw new Error("Email не відповідає коду підтвердження");
    }
    await prisma.user.update({
      where: { id: verificationCode.user.id },
      data: { password: hashSync(password, 10) },
    });

    await prisma.verificationCode.delete({
      where: { id: verificationCode.id },
    });
  } catch (error) {
    console.error("RESET PASSWORD ERROR", error);
    throw error;
  }
}
