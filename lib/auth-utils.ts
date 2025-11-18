import { redirect } from "next/navigation"
import { auth } from "./auth"
import { headers } from "next/headers"

export const authCheck = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        redirect("/signin")
    }

    return session;
}

export const authCheckPass = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (session) {
        redirect("/")
    }
}