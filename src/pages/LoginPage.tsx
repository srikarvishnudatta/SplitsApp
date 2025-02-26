import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {login} from "@/api/http.ts";
import {User} from "@/types/types.ts"
import {FormEvent, useState} from "react";
import { Info } from "lucide-react";

function LoginPage(){
    const navigate = useNavigate()
    const { mutate, isError, error} = useMutation<unknown, {message:string}, User>({
        mutationKey: ["login"],
        mutationFn: (user) => login(user),
        onSuccess: () => navigate("/home")
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault()
        mutate({email, password})
    }
    return <div className={"max-w-[500px] mx-auto mt-[100px]"}>
        <h1 className={"text-2xl font-semibold"}>Get Back. Settle it.</h1>
        <h1 className={"text-2xl font-semibold text-gray-400"}>Log back in</h1>
        {isError && <p className="bg-red-100 p-2 mt-1 text-sm flex gap-1 items-center border-sm"><Info />{error.message}</p>}
        <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={submitHandler}>
            <Label>Email</Label>
            <Input type={"email"}
                   placeholder={"your@example.com"}
                   required className={"focus-visible:ring-0"}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Password</Label>
            <Input type={"password"}
                   placeholder={"password@123"}
                   required className={"focus-visible:ring-0"}
                   onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink to={"/auth/resetPassword"}>
            <p className={"text-gray-500 text-sm"}>Forgot password?</p>
            </NavLink>
            <Button className={"w-full "}>Continue</Button>
        </form>
        <div>
            {/*<div className={"border rounded-sm py-2 px-2"}>*/}
            {/*    /!*<FontAwesomeIcon icon="fa-brands fa-google" size="lg" style={{color: "#FFD43B",}} />*!/*/}
            {/*    Continue with Google</div>*/}
        </div>
    </div>
}

export default LoginPage