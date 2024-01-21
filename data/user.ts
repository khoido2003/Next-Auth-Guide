import { db } from "@/lib/db";

export const getUserByemail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (err) {
    return null;
  }
};
