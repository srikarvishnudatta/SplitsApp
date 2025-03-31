import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {login} from "@/api/http.ts";
import {User} from "@/types/types.ts";
import AuthError from "@/components/AuthError";
import {useForm} from "react-hook-form";


type LoginFormValues = {
    email:string;
    password:string;
}
function LoginPage(){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<LoginFormValues>();
    const { mutate, isError, error} = useMutation<unknown, {message:string}, User>({
        mutationKey: ["login"],
        mutationFn: (user) => login(user),
        onSuccess: () => navigate("/home")
    });
    function submitHandler(data: LoginFormValues){
        console.log({...data})
        mutate({...data})
    }
    return <div className={"max-w-[500px] mx-auto mt-[100px]"}>
        <h1 className={"text-2xl font-semibold"}>Get Back. Settle it.</h1>
        <h1 className={"text-2xl font-semibold text-gray-400"}>Log back in</h1>
        {isError && <AuthError message={error.message}/>}
        <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={handleSubmit(submitHandler)}>
            <Label htmlFor={"email"}>Email</Label>
            <Input type={"email"}
                   id={"email"}
                   placeholder={"your@example.com"}
                   required className={"focus-visible:ring-0"}
                   {...register("email")}
            />
            <Label htmlFor={"password"}>Password</Label>
            <Input type={"password"}
                   id={"password"}
                   placeholder={"password@123"}
                   required className={"focus-visible:ring-0"}
                   {...register("password")}
            />
            <NavLink to={"/auth/resetPassword"}>
            <p className={"text-gray-500 text-sm"}>Forgot password?</p>
            </NavLink>
            <Button className={"w-full "}>Continue</Button>
        </form>
    </div>
}

export default LoginPage