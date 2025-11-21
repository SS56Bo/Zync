'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z} from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaGithub, FaGoogle, FaGitlab } from "react-icons/fa6";


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
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-5">
                                <div className="flex flex-col gap-5">
                                    <Button variant="outline" className="w-full flex items-center justify-center gap-2" disabled={isPending}>
                                        <FaGithub className="h-4 w-4" />
                                        Continue with GitHub
                                    </Button>
                                    <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button" disabled={isPending}>
                                            <FaGoogle className="h-4 w-4"/>
                                            Continue with Google
                                    </Button>
                                    {/* <Button variant="outline" className="w-full flex items-center justify-center gap-2" type="button" disabled={isPending}>
                                        <FaGitlab className="h-4 w-4"/>
                                        Continue with GitLab
                                    </Button> */}
                                </div>
                                <div className="grid gap-6">
                                    <FormField control={form.control} name="email" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="example@email.com" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <FormField control={form.control} name="password" render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Password" {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}/>

                                    <Button type="submit" className="w-full" disabled={isPending}>Login</Button>
                                </div>
                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/signup" className="underline underline-offset-4">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}