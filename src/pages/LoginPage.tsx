import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { LoginData } from "@/types/types";
import { FormEvent, useCallback, useRef, useState } from "react";
import { signIn } from "@/lib/firebase";
import Divider from "@/components/ui-custom/Divider";
import GoogleButton from "@/components/ui-custom/GoogleButton";
import AppleButton from "@/components/ui-custom/AppleButton";
import LoginsignupWrapper from "@/components/LoginsignupWrapper";
import PasswordInput from "@/components/ui-custom/PasswordInput";
import { useMutation } from "@tanstack/react-query";
import AuthError from "@/components/ui-custom/AuthError";
import AuthenticationError from "@/lib/error";
import DataInput from "@/components/ui-custom/DataInput";


function LoginPage() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const {mutate, isPending} = useMutation<unknown, AuthenticationError, LoginData>({
    mutationFn: (data) => signIn(data),
    onError: (error) => setError(error.message),
    onSuccess: () => navigate("/app")
  });
  const validate = useCallback((email:string, password:string) => {
    if(!email || !password){
      if(!email && password) setError("Email cannot be empty")
      else if(!password && email) setError("Password cannot be empty")
      else setError("Email & Password cannot be empty");
      return false;
    }else{
      return true;
    }
  }, [setError]);
  const submitHandler = useCallback(async (ev: FormEvent<HTMLFormElement>) =>{
    ev.preventDefault();
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    if(validate(email, password)){
      mutate({email, password});
    }
  }, [emailRef, passwordRef, mutate]);
  return (
   <LoginsignupWrapper variant="login">
    <form className="space-y-3" onSubmit={submitHandler}>
    {error && <AuthError message={error}/>}
          <DataInput ref={emailRef}
          id="email"
          placeholder="johndoe@example.com"
          type="email"
          name="email"
          label="Email"
          isError={error?.includes("Email")}
          />
          <PasswordInput ref={passwordRef} 
          isError={error?.includes("Password")}/>
              <NavLink
                to={"/"}
                className="block text-right pt-2 text-xs hover:underline hover:text-primary transition-all duration-100"
              >
                Forgot Password?
              </NavLink>
            <Button className="w-full text-white" disabled={isPending} type="submit">Login</Button>
            <Button variant={"secondary"} className="w-full text-primary" type="button"><NavLink to={"/signup"}>Signup</NavLink></Button>
            <Divider/>
            <GoogleButton />
            <AppleButton />
          </form>
   </LoginsignupWrapper>
  );
}

export default LoginPage;
