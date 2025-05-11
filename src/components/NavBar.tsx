import { useEffect, useState } from "react"
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

function NavBar() {
  const [isScrolled, setIsScrolled] =  useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() =>{
    const handleScroll = () =>{
        setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <header className={`bg-secondary fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? " shadow-md py-3 " : " py-5"} `}>
        <div className="px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline">
                <Logo path="/"/>
                {/* desktop navigation */}
                <nav className="hidden md:flex gap-4 items-center">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"#features"}>Features</NavLink>
                    <Button variant={"outline"} className="border-1 text-primary border-primary hover:bg-primary/50 transition-all duration-300"><NavLink to={"/signin"}>Signin</NavLink></Button>
                    <Button><NavLink to={"/signup"} className={"text-white"}>Signup</NavLink></Button>
                </nav>
                <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                  {mobileMenu ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>
            {/* Mobile navigation */}
            {mobileMenu && <nav className="md:hidden py-4 space-y-4 flex flex-col">
              <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"#features"}>Features</NavLink>
                    <Button variant={"outline"} className="border-1 border-primary text-primary/80 hover:bg-primary/5 transition-all duration-300"><NavLink to={"/signin"}>Signin</NavLink></Button>
                    <Button><NavLink to={"/signup"} className={"text-white"}>Signup</NavLink></Button>
              </nav>}
        </div>
    </header>
  )
}

export default NavBar