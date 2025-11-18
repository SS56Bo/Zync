'use client';
import { Button } from "@/components/ui/button";
// <-- hooks can only be used in client components
import { trpc } from "../api/trpc/client";

export function Greeting() {
  
  const data = trpc.fetchUsers.useQuery();

  return(
    <div className="min-w-screen min-h-screen flex flex-col font-semibold items-center justify-center gap-y-6">
       <div> {JSON.stringify(data, null, 2)} </div>
       <Button>
          Log Out
       </Button>
    </div>
  )
}