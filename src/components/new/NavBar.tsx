import { useEffect, useState } from "react"
import { NavLink } from "react-router";
import logo from "./logo.svg";
import { Button } from "../ui/button";

function NavBar() {
  const [isScrolled, setIsScrolled] =  useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
        setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <header className={`max-w-7xl mx-auto fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3 " : "bg-white py-5"} `}>
        <div className="px-4 sm:px-6 lg:px-2">
            <div className="flex justify-between items-center">
                <NavLink to={"/"}>
                    <img src={logo} alt="website logo" height={150} width={150}/>
                </NavLink>
                <nav className="flex gap-4 items-center">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"#features"}>Features</NavLink>
                    <Button variant={"outline"} className="border-1 border-primary text-primary/80 hover:bg-primary/5 transition-all duration-300"><NavLink to={"/signin"}>Signin</NavLink></Button>
                    <Button><NavLink to={"/"} className={"text-white"}>Signup</NavLink></Button>
                </nav>
            </div>
            
        </div>
    </header>
  )
}

export default NavBar