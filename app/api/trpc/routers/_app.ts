import prismaAPI from '@/lib/db';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
export const appRouter = createTRPCRouter({
  fetchUsers: protectedProcedure.query(
    ({ ctx }) => {
      return prismaAPI.user.findMany({
        where: {
          id: ctx.auth.user.id
        }
      })
    }
  )
    
});

// export type definition of API
export type AppRouter = typeof appRouter;