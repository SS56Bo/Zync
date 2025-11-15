'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z} from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const userLoginSchema = z.object({
    email: z.email("Please enter a valid email!"),
    password: z.string().min(8, "Password is required!")
})

type LoginFormType = z.infer<typeof userLoginSchema>

export function LoginSupport() {
    const router = useRouter();

    const form = useForm<LoginFormType>({
        resolver: zodResolver(userLoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async (values: LoginFormType) => {
        console.log(values)
    }

    const isPending = form.formState.isSubmitting;

    return(
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Welcome Back
                    </CardTitle>
                    <CardDescription>
                        Please Login to Continue!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form>
                            
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}