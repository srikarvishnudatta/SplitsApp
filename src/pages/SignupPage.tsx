import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/firebase";
import { SignupData } from "@/types/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { EyeOff, Eye, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "@/assets/logo.svg";


function SignupPage() {
  const [formData, setFormData] = useState<SignupData>({email:"", password:"", first_name:"", last_name:""});
 const [viewPassword, setViewPassword] = useState(false);
 const navigate = useNavigate();
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [error, setError] = useState({
  email:false,
  password:false,
  first_name:false,
  last_name:false,
  message:""
 });
 async function submitHandler(ev: FormEvent<HTMLFormElement>){
  setIsSubmitting(true);
  ev.preventDefault();
  if(!formData.first_name){
    setError((prev) => (
      {
          ...prev,
          first_name:true,
          message:"This field cannot be empty"
      }
  ));
  }
  if(!formData.last_name){
    setError((prev) => (
      {
          ...prev,
          last_name:true,
          message:"This field cannot be empty"
      }
  ));
  }
  if(!formData.email){
      setError((prev) => (
          {
              ...prev,
              email:true,
              message:"This field cannot be empty"
          }
      ));
  }if(!formData.password){
    setIsSubmitting(false);
      setError((prev) => (
          {
              ...prev,
              password:true,
              message:"This field cannot be empty"
          }
      ));
      return
  }else{
      if(!/\S+@\S+\.\S+/.test(formData.email)){
        setIsSubmitting(false);
          setError((prev) => (
              {
                  ...prev,
                  email:true,
                  message:"Invalid email address"
              }
          ))
          return
      }
  }
  try {
      await signUp({...formData});
      navigate("/app");
  } catch (error) {
    setIsSubmitting(false);
      setError({
          email:true,
          password:true,
          first_name:false,
          last_name:false,
          message:"Account already exists!"
      });
  }
 }
return (
  <main className="min-h-screen flex">
    <div className="hidden lg:block lg:w-1/2 bg-gradient text-white/90">
      <div className="flex justify-center items-center h-screen max-w-md mx-auto">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-6">Join today!</h2>
          <p className="text-xl mb-8 text-gray-200">
          Create an account and start managing your shared expenses with friends and family.          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
            <p>Track expenses with friends and roommates</p>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
            <p>Split bills equally or set custom amounts</p>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
            <p>Get notified when you owe money or when you're paid back</p>
            </div>
            <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
            <p>Access your account from any device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 md:flex items-center justify-center p-6">
      <div className="border border-gray-400/90 p-8 rounded-xl">
        <div className="mb-8">
        <img src={logo} alt="" height={120} width={200} className="ml-[-10px]"/>
          <h1 className="text-2xl font-bold flex justify-between">
            Sign up right now
          </h1>

          <p className="mt-2">
            Enter your all the details to create your account
          </p>
        </div>

        <form className="space-y-3" onSubmit={submitHandler}>

          <div className="md:flex md:gap-4 space-y-3 md:space-y-0">
          <div className="space-y-3">
          <Label>First Name</Label>
          <Input placeholder="John" type="text"
          className={error.first_name ? "border-red-500": undefined}
          value={formData.first_name}
          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
          />
          </div>
         <div className="space-y-3">
         <Label>Last Name</Label>
          <Input placeholder="Doe" type="text"
          className={error.last_name ? "border-red-500": undefined}
          value={formData.last_name}
          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
          />
         </div>
          </div>

          <Label>Email</Label>
          <Input placeholder="johndoe@example.com" type="email"
          className={error.email ? "border-red-500": undefined}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {error.email && <p className="text-red-400/90 text-xs">{error.message}</p>}
          <Label>Password</Label>
          <div className="relative">
          <Input placeholder="**********" type={viewPassword ? "text" : "password"} 
          value={formData.password}
          className={error.password ? "border-red-500": undefined}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Button className="absolute right-3 top-1 h-6 w-6" type="button" 
          onClick={() => setViewPassword((prev) => !prev)} variant={"secondary"}>
              {viewPassword ? <EyeOff /> : <Eye />}
          </Button>
          </div>
          {error.password && <p className="text-red-400/90 text-xs">{error.message}</p>}
          <p className="text-right"><NavLink to={"/signin"} className="text-primary/70 text-sm hover:underline hover:text-primary">Already Have an Account?</NavLink></p>
          <Button className="w-full text-white" disabled={isSubmitting}>
              Create
          </Button>
        </form>
      </div>
    </div>
  </main>
);
}

export default SignupPage