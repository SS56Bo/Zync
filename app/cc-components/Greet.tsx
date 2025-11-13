'use client'
import { trpc } from "@/trpc-client/client"

function Greet() {
    const {data} = trpc.greet.useQuery();
  return (
    <div>
      {data}
    </div>
  )
}

export default Greet
