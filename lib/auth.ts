import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prismaAPI from "./db";

export const auth = betterAuth({
    database: prismaAdapter(prismaAPI, {
      provider: "postgresql",
    }),
  
    user: {
      modelName: "User",       // THIS is the fix.
    },
  
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
    },
  });
  