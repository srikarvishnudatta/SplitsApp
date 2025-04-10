
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import { signUp } from "@/api/api";
import {ErrorType, SignupData} from "@/types/types.ts";
import {toast} from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AuthError from "@/components/AuthError";

function SignupPage() {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('')
    const {register, handleSubmit} = useForm<SignupData>()
    const {mutate} = useMutation<unknown, ErrorType, SignupData>({
        mutationFn: (new_user) => signUp(new_user),
        onError: (err) => setErrMsg(err.message),
        onSuccess: () => {
            toast("Account successfully created!");
            setInterval(() =>{
                navigate("/login")
            }, 2000)
        }
    })
    function submitHandler(data: SignupData){
        mutate({...data})
    }
    return <>
        <div className={"w-[800px] mx-auto mt-[100px] bg-white"}>
            <h1 className={"text-2xl font-semibold"}>Join. Split.</h1>
            <h1 className={"text-2xl font-semibold text-gray-400"}>Lets get started</h1>
            {errMsg && <AuthError message={errMsg}/>}
            <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={handleSubmit(submitHandler)}>
                <div className={"flex gap-2"}>
                    <div className={"basis-[50%]"}>
                        <Label>First Name</Label>
                        <input type={"text"}
                                required
                               {...register("first_name")}
                               placeholder={"Tom"} className={"focus-visible:ring-0 "}/>
                    </div>
                    <div className={"basis-[50%]"}>
                        <Label>Last Name</Label>
                        <input type={"text"}
                               {...register("last_name")}
                               placeholder={"Don"}
                               required className={"focus-visible:ring-0 basis-1"}/>
                    </div>
                </div>
                <Label>Email</Label>
                <input type={"email"}
                       placeholder={"your@example.com"}
                       {...register("email")}
                       required className={"focus-visible:ring-0"}/>
                <Label>Password</Label>
                <input type={"password"}
                       {...register("password")}
                       placeholder={"password@123"}
                       required className={"focus-visible:ring-0"}/>
                <NavLink to={"/login"} className="text-gray-500 text-sm"> Already have an account?</NavLink>
                <Button className={"w-full "}>Continue</Button>
            </form>
        </div>
    </>
}

export default SignupPage;