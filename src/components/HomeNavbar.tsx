import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "@/assets/logo.svg";
import { Button } from "./ui/button";
import {  Menu, User, X, Home, Settings, Wrench, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { logout } from "@/lib/firebase";
import InviteDropDown from "./InviteDropDown";

function HomeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  async function logoutUser(){
    await logout();
    navigate("/");
  }
  return (
    <header
      className={` bg-back-lt  fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? " shadow-md py-3 " : " py-5"} `}
    >
      <div className="px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <NavLink to={"/app"} className={"ml-[-0.4rem]"}>
              <img src={logo} alt="website logo" height={150} width={150} />
            </NavLink>
          </div>
          {/* desktop navigation */}
          <nav className="hidden md:flex gap-4 items-center">
            <NavLink to={"/app"} end className={({isActive}) => `flex gap-0.5 items-center hover:text-secondary transition-all duration-300  ${isActive ? "text-secondary border-b" : "text-white border-none"}`}><Home size={16}/>Home</NavLink>
            <NavLink to={"/app/new-group"} end className={({isActive}) => `flex gap-0.5 items-center hover:text-secondary transition-all duration-300 ${isActive ? "text-secondary border-b" : "text-white border-none"}`}><PlusCircle size={16}/> New Group</NavLink>
            {/* TODO: make this a button */}
            <NavLink to={"#features"} className={"flex items-center hover:text-secondary transition-all duration-300"}><PlusCircle size={16}/> Add Expense</NavLink>
            <InviteDropDown open={isInviteOpen} openTrigger={() => setIsInviteOpen((prev) => !prev)}/>
            <DropdownMenu >
              <DropdownMenuTrigger>
                <Button className="bg-back-lt border border-secondary text-secondary hover:bg-secondary/20">
                  <User /> Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-back-lt mr-6 mt-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="underline hover:text-gray-300 transition-colors duration-150"><User/> Profile</DropdownMenuItem>
                <DropdownMenuItem className="underline hover:text-gray-300 transition-colors duration-150"><Settings/>Settings</DropdownMenuItem>
                <DropdownMenuItem className="underline hover:text-gray-300 transition-colors duration-150"><Wrench/>Support</DropdownMenuItem>
                <DropdownMenuItem >
                  <Button className="w-full text-white" onClick={logoutUser}>Logout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile navigation */}
        {mobileMenu && (
          <nav className="md:hidden py-4 space-y-4 flex flex-col">
            <NavLink to={"/app"}>Home</NavLink>
            <NavLink to={"#features"}>Expenses</NavLink>
            <NavLink to={"/invites"}>Invitations</NavLink>
            <Button
              variant={"outline"}
              className="border-1 border-primary text-primary/80 hover:bg-primary/5 transition-all duration-300"
            >
              <NavLink to={"/signin"} className={"flex items-center gap-1"}>
                <User />
                Account
              </NavLink>
            </Button>
            <Button>
              <NavLink to={"/"} className={"text-white"}>
                Logout
              </NavLink>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default HomeNavbar;
