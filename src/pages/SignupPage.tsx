import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/firebase";
import { SignupData } from "@/types/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FormEvent, useCallback, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Divider from "@/components/Divider";
import GoogleButton from "@/components/GoogleButton";
import AppleButton from "@/components/AppleButton";
import LoginsignupWrapper from "@/components/LoginsignupWrapper";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { useMutation } from "@tanstack/react-query";
import AuthenticationError from "@/lib/error";
import AuthError from "@/components/AuthError";

function SignupPage() {
    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {mutate, isPending} = useMutation<unknown, AuthenticationError, SignupData>({
    mutationFn: (data) => signUp(data),
    onError: (error) => setError(error.message),
    onSuccess: () => navigate("/app")
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
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
    const fName = firstName.current?.value as string;
    const lName = lastName.current?.value as string;
    const email = emailRef.current?.value as string;
    const password = emailRef.current?.value as string;
    if(validate(email, password)){
        mutate({first_name: fName, last_name: lName, email, password});
    }
  }
  return (
    <LoginsignupWrapper variant="signup">
      <form className="space-y-3" onSubmit={submitHandler}>
        {error && <AuthError message={error}/>}
        <div className="md:flex md:gap-4 space-y-3 md:space-y-0">
          <div className="space-y-3">
            <Label className="text-sm font-light">First Name</Label>
            <Input
              placeholder="John"
              type="text"
              className={`focus-visible:ring-0 border-gray-200 ${error ? "border-red-500" : undefined}`}
              ref={firstName}
            />
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-light">Last Name</Label>
            <Input
              placeholder="Doe"
              type="text"
              className={`focus-visible:ring-0 border-gray-200 ${error ? "border-red-500" : undefined}`}
              ref={lastName}
            />
          </div>
        </div>

        <EmailInput ref={emailRef}
        isError={error?.includes("Email")}
        />
        <PasswordInput ref={passwordRef}
        isError={error?.includes("Password")}
        />
        <p className="text-right">
          <NavLink
            to={"/signin"}
            className="block text-right pt-2 text-xs hover:underline hover:text-primary transition-all duration-100"
          >
            Already Have an Account?
          </NavLink>
        </p>
        <Button className="w-full text-white" disabled={isPending} type="submit">
          Submit
        </Button>
        <Divider />
        <GoogleButton />
        <AppleButton />
      </form>
    </LoginsignupWrapper>
  );
}

export default SignupPage;
