import { requestPasswordResetLink } from "@/api/http"
import AuthError from "@/components/AuthError"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useMutation } from "@tanstack/react-query"
import { FormEvent, useState } from "react"

function RequestNewPasswordPage(){
    const [email, setEmail] = useState('')
    const {mutate, isError, error} = useMutation({
        mutationKey: ["request-link"],
        mutationFn: () => requestPasswordResetLink(email)
    });
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        mutate();
    }
    return <div className="max-w-xs flex justify-center items-center mx-auto mt-20">
        <form action="" className="flex flex-col gap-3" onSubmit={submitHandler}>
            {isError && <AuthError message={error.message}/>}
            <h1 className={"font-semibold text-3xl"}>Forgot your Password?</h1>
            <h3 className={"text-gray-500 font-medium"}>Don't worry, lets start with your email</h3>
            <Label>Email</Label>
            <Input placeholder="your email" name="email" id="email" value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            />
            <Button>Submit</Button>
        </form>
    </div>
}
export default RequestNewPasswordPage