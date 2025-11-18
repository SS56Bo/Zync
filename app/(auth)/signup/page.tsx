import { RegistrationForm } from "@/app/cc-components/auth/Registration-form";
import { authCheckPass } from "@/lib/auth-utils";

async function page() {
    await authCheckPass();
    return(
        <div>
            <RegistrationForm />
        </div>
    )
}

export default page;