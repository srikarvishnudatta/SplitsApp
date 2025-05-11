import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { LoginData } from "@/types/types";
import { FormEvent, useCallback, useRef, useState } from "react";
import { signIn } from "@/lib/firebase";
import Divider from "@/components/Divider";
import GoogleButton from "@/components/GoogleButton";
import AppleButton from "@/components/AppleButton";
import LoginsignupWrapper from "@/components/LoginsignupWrapper";
import PasswordInput from "@/components/PasswordInput";
import EmailInput from "@/components/EmailInput";
import { useMutation } from "@tanstack/react-query";
import AuthError from "@/components/AuthError";
import AuthenticationError from "@/lib/error";


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
  async function submitHandler(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    if(validate(email, password)){
      mutate({email, password});
    }
  }
  return (
   <LoginsignupWrapper variant="login">
    <form className="space-y-3" onSubmit={submitHandler}>
    {error && <AuthError message={error}/>}
          <EmailInput ref={emailRef}
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
