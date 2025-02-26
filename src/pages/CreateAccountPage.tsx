import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {createUser} from "@/api/http.ts";
import {NewUser} from "@/types/types.ts";
import {useToast} from "@/hooks/use-toast.ts";

function CreateAccountPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { toast } = useToast();
    const navigate = useNavigate()
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
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault()
        const new_user: NewUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }
        mutate(new_user);
    }
    return <>
        <div className={"max-w-[500px] mx-auto mt-[100px]"}>
            <h1 className={"text-2xl font-semibold"}>Join. Split.</h1>
            <h1 className={"text-2xl font-semibold text-gray-400"}>Lets get started</h1>
            <form action="" className={"mt-4 flex flex-col gap-3"} onSubmit={submitHandler}>
                <div className={"flex gap-2"}>
                    <div className={"basis-[50%]"}>
                        <Label>First Name</Label>
                        <Input type={"text"}
                               name={"first_name"}
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                               placeholder={"Tom"} required className={"focus-visible:ring-0 "}/>
                    </div>
                    <div className={"basis-[50%]"}>
                        <Label>Last Name</Label>
                        <Input type={"text"}
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                               placeholder={"Don"}
                               name={"last_name"}
                               required className={"focus-visible:ring-0 basis-1"}/>
                    </div>
                </div>
                <Label>Email</Label>
                <Input type={"email"}
                       placeholder={"your@example.com"}
                       name={"email"}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required className={"focus-visible:ring-0"}/>
                <Label>Password</Label>
                <Input type={"password"}
                       name={"password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={"password@123"}
                       required className={"focus-visible:ring-0"}/>
                <p>With us already? <NavLink to={"/login"}> click</NavLink></p>
                <Button className={"w-full "}>Continue</Button>
            </form>
        </div>
    </>
}

export default CreateAccountPage