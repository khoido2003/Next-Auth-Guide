import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
bcrypt;

import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas";
import { getUserByemail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByemail(email);

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password as string
          );

          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
