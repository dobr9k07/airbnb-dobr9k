// import { AuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import TwitterProvider from "next-auth/providers/twitter";
// import FacebookProvider from "next-auth/providers/facebook";

// export const authOptions: AuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),
//     TwitterProvider({
//       clientId: process.env.TWITTER_CLIENT_ID || "",
//       clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID || "",
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
//     }),
//   ],
//   pages: {
//     signIn: "/auth/login",
//   },
// };

import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { axiosInstance } from "@/services/instance";
import { ApiRoutes } from "@/services/constants";

interface LoginResponse {
  token: string;
}

export const authOptions: AuthOptions = {
  providers: [
    // Кастомний провайдер для логіну через ваш API
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axiosInstance.post<LoginResponse>("/login", {
            email: credentials.email,
            password: credentials.password,
          });

          if (response.data.token) {
            // Формуємо мінімальний об'єкт користувача
            return {
              id: credentials.email, // Використовуємо email як id, якщо бекенд не повертає id
              email: credentials.email,
              accessToken: response.data.token,
            };
          }
          return null;
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    // JWT callback - додаємо access token до JWT
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    // Session callback - додаємо access token до сесії
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
