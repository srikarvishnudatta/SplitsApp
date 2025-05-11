import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/firebase";
import { SignupData } from "@/types/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { EyeOff, Eye } from "lucide-react";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Logo from "@/components/Logo";
import GoogleLogo from "@/components/GoogleLogo";
import Apple from "@/components/Apple";


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
  <section className="bg-wave">
    <div className="w-full p-6 min-h-screen lg:w-1/2 md:flex items-center justify-center mx-auto">
      <div className="bg-white shadow-md p-8 rounded-xl">
        <div className="mb-8">
        <Logo path={"/"} />
          <h1 className="text-2xl font-bold flex justify-between">
            Let's get started
          </h1>
          <p className="mt-2 text-sm font-light">
            Enter your all the details to create your account
          </p>
        </div>

        <form className="space-y-3" onSubmit={submitHandler}>
          <div className="md:flex md:gap-4 space-y-3 md:space-y-0">
          <div className="space-y-3">
          <Label className="text-sm font-light">First Name</Label>
          <Input placeholder="John" type="text"
          className={`focus-visible:ring-0 border-gray-200 ${error.first_name ? "border-red-500" : undefined}`}
          value={formData.first_name}
          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
          />
          </div>
         <div className="space-y-3">
         <Label className="text-sm font-light">Last Name</Label>
          <Input placeholder="Doe" type="text"
          className={`focus-visible:ring-0 border-gray-200 ${error.last_name ? "border-red-500" : undefined}`}
          value={formData.last_name}
          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
          />
         </div>
          </div>

          <Label className="text-sm font-light">Email</Label>
          <Input placeholder="johndoe@example.com" type="email"
          className={`focus-visible:ring-0 border-gray-200 ${error.email ? "border-red-500" : undefined}`}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {error.email && <p className="text-red-400/90 text-xs">{error.message}</p>}
          <Label className="text-sm font-light">Password</Label>
          <div className="relative">
          <Input placeholder="**********" type={viewPassword ? "text" : "password"} 
          value={formData.password}
          className={`focus-visible:ring-0 border-gray-200 ${error.password ? "border-red-500" : undefined}`}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Button className="absolute right-3 top-1 h-6 w-6" type="button" 
          onClick={() => setViewPassword((prev) => !prev)} variant={"secondary"}>
              {viewPassword ? <EyeOff /> : <Eye />}
          </Button>
          </div>
          {error.password && <p className="text-red-400/90 text-xs">{error.message}</p>}
          <p className="text-right"><NavLink to={"/signin"} className="block text-right pt-2 text-xs hover:underline hover:text-primary transition-all duration-100">Already Have an Account?</NavLink></p>
          <Button className="w-full text-white" disabled={isSubmitting}>
              Submit
          </Button>
          <div className="flex items-center gap-1">
              <div className="border-b border-gray-200 grow "></div>
              <p className="text-xs font-light text-gray-400">or use</p>
              <div className="border-b border-gray-200 grow "></div>
            </div>
            <Button variant={"secondary"} className="w-full py-6" type="button">
              <GoogleLogo/> Google
            </Button>
            <Button variant={"secondary"} className="w-full py-6" type="button">
              <Apple/> Apple
            </Button>
        </form>
      </div>
    </div>
  </section>
);
}

export default SignupPage