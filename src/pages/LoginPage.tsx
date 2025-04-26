import logo from "./logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { LoginData } from "@/types/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

function LoginPage() {
    const [formData, setFormData] = useState<LoginData>({email:"", password:""});
   const [viewPassword, setViewPassword] = useState(false);
   const {user} = useAuth();
   const [error, setError] = useState({
    email:false,
    password:false,
    message:""
   });
   async function submitHandler(ev: FormEvent<HTMLFormElement>){
    ev.preventDefault();
    if(!formData.email){
        setError((prev) => (
            {
                ...prev,
                email:true,
                message:"This field cannot be empty"
            }
        ));
    }if(!formData.password){
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
        const response = await signIn({...formData});
        console.log(response)
    } catch (error) {
        setError({
            email:true,
            password:true,
            message:"Bad Credentials"
        })
    }
   }
   console.log("context user is:",user);
  return (
    <main className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 bg-gradient text-white/90">
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-6">Welcome back!</h2>
            <p className="text-xl mb-8 text-gray-200">
              Log in to your account to view and manage your shared expenses.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border p-4 rounded-lg border-gray-100">
                <h3 className="font-semibold mb-2">Track Expenses</h3>
                <p className="text-sm text-gray-200">
                  Keep track of who owes what with ease.
                </p>
              </div>
              <div className="border p-4 rounded-lg border-gray-100">
                <h3 className="font-semibold mb-2">Split Bills</h3>
                <p className="text-sm text-gray-200">
                  Divide expenses fairly among your group.
                </p>
              </div>
              <div className="border p-4 rounded-lg border-gray-100">
                <h3 className="font-semibold mb-2">Settle Debts</h3>
                <p className="text-sm text-gray-200">
                  Easily settle up with friends and roommates.
                </p>
              </div>
              <div className="border p-4 rounded-lg border-gray-100">
                <h3 className="font-semibold mb-2">Stay Organized</h3>
                <p className="text-sm text-gray-200">
                  Manage expenses across multiple groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div>
          <div className="mb-8 text-center">
          <img src={logo} alt="" height={120} width={200} className="ml-[-10px]"/>
            <h1 className="text-2xl font-bold flex justify-between">
              Log in to your account
            </h1>

            <p className="mt-2">
              Enter your email and password to access your account
            </p>
          </div>

          <form className="space-y-3" onSubmit={submitHandler}>
            <Label>Email</Label>
            <Input placeholder="johndoe@example.com" type="email"
            className={error.email ? "border-red-500": undefined}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {error.email && <p className="text-red-400 text-xs">{error.message}</p>}
            <Label>Password</Label>
            <div className="relative">
            <Input placeholder="**********" type={viewPassword ? "text" : "password"} 
            value={formData.password}
            className={error.password ? "border-red-500": undefined}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <Button className="absolute right-3 top-1 bg-white h-6 w-6" type="button" 
            onClick={() => setViewPassword((prev) => !prev)} variant={"secondary"}>
                {viewPassword ? <EyeOff /> : <Eye />}
            </Button>
            </div>
            {error.password && <p className="text-red-400 text-xs">{error.message}</p>}
            <p className="text-right"><NavLink to={"/"} className="text-primary/70 text-sm hover:underline hover:text-primary">Forgot Password?</NavLink></p>
            <Button className="w-full text-white">
                Login
            </Button>
          </form>
          
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
