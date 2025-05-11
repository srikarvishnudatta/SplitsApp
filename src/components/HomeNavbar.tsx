import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import {  Menu, User, X, Home, Settings, Wrench, PlusCircle, MailOpen, MailCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { logout } from "@/lib/firebase";
import Logo from "./Logo";
import Bell from "./BellIcon";

const navOptions = [
  {
    path:"/app",
    element: <><Home size={16}/>Home</>
  },
  {
    path:"/app/new-group",
    element: <><PlusCircle size={16}/>Add Group</>
  },
  {
    path:"/app/new-expense",
    element: <><PlusCircle size={16}/>Add Expense</>
  },
];

function HomeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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
      className={`bg-primary/90 fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? " shadow-md py-3 " : " py-5"} `}
    >
      <div className="px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo path="/app" variant="light"/>
          </div>
          {/* desktop navigation */}
          <nav className="hidden md:flex gap-2 items-center">
            {navOptions.map((option, index) => (
              <NavLink to={option.path} key={index} end 
              className={({isActive}) => `flex gap-1 px-2 py-0.5 items-center  transition-all duration-300  
            ${isActive ? "bg-white rounded-md text-primary " : "text-white hover:text-white/70"}`}
              >
                {option.element}
              </NavLink>
            ))}
            <NavLink to={"/app/invitations"}>
            <Bell isActive={false}/></NavLink>
            {/* <DropdownMenu >
              <DropdownMenuTrigger>
                <div className="bg-back-lt flex items-center px-2 py-1 rounded-md border border-secondary text-secondary hover:bg-secondary/20">
                  <User size={16}/> Account
                </div>
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
            </DropdownMenu> */}
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
