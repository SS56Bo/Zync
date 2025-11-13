'use client';

import { HydrationBoundary, DehydratedState, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';

export function HydrateClient({
  children,
}: {
  children: ReactNode;
  state: DehydratedState;
}) {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
