import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {createUser} from "@/api/http.ts";
import {NewUser} from "@/types/types.ts";
import {useToast} from "@/hooks/use-toast.ts";
import { useForm } from "react-hook-form";

type CreateAccountValues = {
    email:string;
    password:string;
    first_name:string;
    last_name:string;
}

function CreateAccountPage() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<CreateAccountValues>()
    const {mutate} = useMutation<unknown, unknown, NewUser>({
        mutationKey: ["create"],
        mutationFn: (new_user) => createUser(new_user),
        onSuccess: () => {
            toast({
                title:"Email verification link sent!",
                description:"check your inbox or spam for the email"
            });
            setInterval(() =>{
                navigate("/login")
            }, 2000)
        }
    })
    function submitHandler(data: CreateAccountValues){
        mutate({...data})
    }
    return <>
        <div className={"max-w-[500px] mx-auto mt-[100px]"}>
            <h1 className={"text-2xl font-semibold"}>Join. Split.</h1>
            <h1 className={"text-2xl font-semibold text-gray-400"}>Lets get started</h1>
            <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={handleSubmit(submitHandler)}>
                <div className={"flex gap-2"}>
                    <div className={"basis-[50%]"}>
                        <Label>First Name</Label>
                        <Input type={"text"}
                                required
                               {...register("first_name")}
                               placeholder={"Tom"} className={"focus-visible:ring-0 "}/>
                    </div>
                    <div className={"basis-[50%]"}>
                        <Label>Last Name</Label>
                        <Input type={"text"}
                               {...register("last_name")}
                               placeholder={"Don"}
                               required className={"focus-visible:ring-0 basis-1"}/>
                    </div>
                </div>
                <Label>Email</Label>
                <Input type={"email"}
                       placeholder={"your@example.com"}
                       {...register("email")}
                       required className={"focus-visible:ring-0"}/>
                <Label>Password</Label>
                <Input type={"password"}
                       {...register("password")}
                       placeholder={"password@123"}
                       required className={"focus-visible:ring-0"}/>
                <NavLink to={"/login"} className="text-gray-500 text-sm"> Already have an account?</NavLink>
                <Button className={"w-full "}>Continue</Button>
            </form>
        </div>
    </>
}

export default CreateAccountPage