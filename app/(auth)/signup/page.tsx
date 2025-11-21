import { RegistrationForm } from "@/app/cc-components/auth/Registration-form";
import { authCheckPass } from "@/lib/auth-utils";
import Image from "next/image"
import Link from "next/link"

async function page() {
    await authCheckPass();
    return(
        <div className="bg-muted flex min-h-svh flex-col justify-center items-center gap-6 p-6 mid:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 self-center font-medium">
              <Image src="/logo.svg" alt="Zync" width={25} height={25}/>
              <div className="text-2xl font-bold">Zync</div>
          </Link>
          <RegistrationForm />
        </div>
    </div>
    )
}

export default page;