import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { LoginData } from "@/types/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "@/lib/firebase";
import Logo from "@/components/Logo";
import GoogleLogo from "@/components/GoogleLogo";
import Apple from "@/components/Apple";

function LoginPage() {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: false,
    password: false,
    message: "",
  });
  async function submitHandler(ev: FormEvent<HTMLFormElement>) {
    setIsSubmitting(true);
    ev.preventDefault();
    if (!formData.email) {
      setError((prev) => ({
        ...prev,
        email: true,
        message: "This field cannot be empty",
      }));
    }
    if (!formData.password) {
      setIsSubmitting(false);
      setError((prev) => ({
        ...prev,
        password: true,
        message: "This field cannot be empty",
      }));
      return;
    } else {
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setIsSubmitting(false);
        setError((prev) => ({
          ...prev,
          email: true,
          message: "Invalid email address",
        }));
        return;
      }
    }
    try {
      await signIn({ ...formData });
      navigate("/app");
    } catch (error) {
      setIsSubmitting(false);
      setError({
        email: true,
        password: true,
        message: "Bad Credentials",
      });
    }
  }
  return (
    <section className=" bg-wave">
      <div className="w-full p-6 min-h-screen lg:w-1/2 md:flex items-center justify-center mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="mb-8">
            <h2 className="text-lg font-bold flex"><Logo/>OweTo</h2>
            <h1 className="text-2xl font-bold flex justify-between">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm font-light">
              Enter your Credentials to access your account
            </p>
          </div>

          <form className="space-y-3" onSubmit={submitHandler}>
            <Label className="text-sm font-light">Email</Label>
            <Input
              placeholder="johndoe@example.com"
              type="email"
              className={`focus-visible:ring-0 border-gray-200 ${error.email ? "border-red-500" : undefined}`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {error.email && (
              <p className="text-red-400/90 text-xs">{error.message}</p>
            )}
            <Label className="text-sm font-light">Password</Label>
            <div className="relative">
              <Input
                placeholder="**********"
                type={viewPassword ? "text" : "password"}
                value={formData.password}
                className={`focus-visible:ring-0 border-gray-200 ${error.password ? "border-red-500" : undefined}`}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Button
                className="absolute right-3 top-1 bg-back h-6 w-6"
                type="button"
                onClick={() => setViewPassword((prev) => !prev)}
                variant={"secondary"}
                
              >
                {viewPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            {error.password && (
              <p className="text-red-400/90 text-xs">{error.message}</p>
            )}
              <NavLink
                to={"/"}
                className="block text-right pt-2 text-xs hover:underline hover:text-primary transition-all duration-100"
              >
                Forgot Password?
              </NavLink>
          
            <Button className="w-full text-white" disabled={isSubmitting}>Login</Button>
            <Button variant={"secondary"} className="w-full text-primary" type="button"><NavLink to={"/signup"}>Signup</NavLink></Button>
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

export default LoginPage;
