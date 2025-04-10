import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {ErrorType, LoginData} from "@/types/types.ts";
import AuthError from "@/components/AuthError";
import {useForm} from "react-hook-form";
import { login } from "@/api/api";

function LoginPage(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<LoginData>();
    const { mutate, isError, error} = useMutation<unknown, ErrorType, LoginData>({
        mutationFn: (user) => login(user),
        onSuccess: () => navigate("/app"),
        onError: () => new Error("Bad Credentials")
    });
    function submitHandler(data: LoginData){
        mutate({...data})
    }
    return <div className={"w-[800px] mx-auto bg-white p-4 rounded-sm"}>
        <h1 className={"text-2xl font-semibold"}>Get Back. Settle it.</h1>
        <h1 className={"text-2xl font-semibold text-gray-400"}>Log back in</h1>
        {isError && <AuthError message={error.message}/>}
        <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={handleSubmit(submitHandler)}>
            <Label htmlFor={"email"}>Email</Label>
            <input type={"email"}
                   id={"email"}
                   placeholder={"your@example.com"}
                   required className={"focus-visible:ring-0"}
                   {...register("email")}
            />
            <Label htmlFor={"password"}>Password</Label>
            <input type={"password"}
                   id={"password"}
                   placeholder={"password@123"}
                   required className={"focus-visible:ring-0"}
                   {...register("password")}
            />
            <NavLink to={""}>
            <p className={"text-gray-500 text-sm"}>Forgot password?</p>
            </NavLink>
            <Button className={"w-full bg-violet-400 text-white"}>Continue</Button>
        </form>
    </div>
   
}

export default LoginPage