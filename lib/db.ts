import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
};

const prismaAPI = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production" ) {
    globalForPrisma.prisma = prismaAPI
}

export default prismaAPI