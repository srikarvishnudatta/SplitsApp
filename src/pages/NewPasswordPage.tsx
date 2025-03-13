import { resetPassword } from '@/api/http';
import AuthError from '@/components/AuthError';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function NewPasswordPage() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [err, setErr] = useState('');
    const [params] = useSearchParams();
    const email = params.get("email") as string;
    const expiresAt = params.get("expiresAt") as string;
    const navigate = useNavigate();
    const {mutate, isSuccess} = useMutation({
        mutationKey:["reset-password"],
        mutationFn: () => resetPassword(email, password, expiresAt),
        onError: (error) => setErr(error.message) 
    })
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        if(password !== newPassword){
            setErr("Passwords dont match");
        }else{
            mutate();
        }
    }
    useEffect(() =>{
            if (isSuccess){
                toast({
                    title:"Password Reset Completed",
                    description:"You will be redirected to login page.."
                })
                setInterval(() => {
                    navigate("/login")
                }, 3000)
            }
        }, [isSuccess])
  return (
    <div className="w-[350px] mx-auto flex items-center justify-center">
    <form action="" className="flex flex-col gap-3" onSubmit={submitHandler}>
        {err && <AuthError message={err}/>}
        <Label>Email</Label>
        <Label>New Password</Label>
        <Input name='new_password' id='new_password' type='password' value={password} 
        onChange={(ev) => setPassword(ev.target.value)}
        />
        
        <Label>Confirm New Password</Label>
        <Input name='confirm_new_password' id='confirm_new_password' type='password' value={newPassword}
        onChange={(ev) => setNewPassword(ev.target.value)}
        />
        <Button>Submit</Button>
    </form>
</div>
  )
}

export default NewPasswordPage