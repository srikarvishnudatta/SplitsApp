import { ReactNode } from "react";
import Logo from "./ui-custom/Logo";

type Props = {
  children: ReactNode;
  variant: "login" | "signup";
};

function LoginsignupWrapper({children, variant}:Props) {
  return (
    <section className="bg-wave">
      <div className="w-full p-6 min-h-screen lg:w-1/2 md:flex items-center justify-center mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="mb-4">
            <Logo path="/" />
            <h1 className="text-2xl font-bold flex justify-between">
              {variant === "login" ? "Welcome Back!":"Let's get started"}
            </h1>
            <p className="mt-2 text-sm font-light">
              {variant === "login" ? "Enter your Credentials to access your account" : "Enter your all the details to create your account"}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export default LoginsignupWrapper;
