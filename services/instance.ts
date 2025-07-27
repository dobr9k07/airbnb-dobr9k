import axios from "axios";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Додаємо для підтримки credentials
  headers: {
    "Content-Type": "application/json",
  },
});

// Інтерцептор для додавання JWT токена
axiosInstance.interceptors.request.use(
  async (config) => {
    // Не додаємо Authorization для логіну
    if (config.url?.includes("/login")) {
      return config;
    }

    if (typeof window !== "undefined") {
      const session = await getSession();
      if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Інтерцептор для обробки 401 помилок
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      !error.config.url?.includes("/login")
    ) {
      // Перенаправляємо на логін тільки для захищених ендпоінтів
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  }
);
