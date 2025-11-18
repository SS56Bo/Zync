import { authCheck } from '@/lib/auth-utils';
import { HydrateClient} from './api/trpc/server';
import { Greeting } from './cc-components/Greeting';

export default async function Home() {
  await authCheck()
  
  
  return (
    <HydrateClient>
      <div>...</div>
        <Greeting />
    </HydrateClient>
  );
}