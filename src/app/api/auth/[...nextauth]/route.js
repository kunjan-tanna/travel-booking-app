import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import bcryptjs from "bcryptjs";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          throw new Error("Invalid Input");
        }
        const isCorrectPass = await bcryptjs.compare(password, user.password);
        if (!isCorrectPass) {
          throw new Error("Invalid Input");
        } else {
          const { password, ...currentUser } = user;
          return currentUser;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  calllbacks: {
    jwt({ token, user }) {
      if (user) token.isAdmin = user.isAdmin;
      return token;
    },
    session({ session, token }) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
