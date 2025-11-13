import { appRouter } from '@/trpc-server/router';
import { HydrateClient } from '@/lib/hydrate-client';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import Greet from './cc-components/Greet';


export default async function Page() {
  const queryClient = new QueryClient();
  const caller = appRouter.createCaller({});

  // ✅ Correct query key
  await queryClient.prefetchQuery({
    queryKey: ['greet'],
    queryFn: () => caller.greet(),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateClient state={dehydratedState}>
      <Greet />
    </HydrateClient>
  );
}