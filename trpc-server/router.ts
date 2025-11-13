import { publicProcedure, setRouter } from ".";

export const appRouter = setRouter({
    greet: publicProcedure.query(()=>('Hello, we have been properly hydrated!'))
})

export type AppRouter = typeof appRouter;