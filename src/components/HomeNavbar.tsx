import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "@/assets/logo.svg";
import { Button } from "./ui/button";
import {  Menu, User, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
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
      className={`max-w-7xl mx-auto fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3 " : "bg-white py-5"} `}
    >
      <div className="px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Menu size={24} className="hidden md:block" />
            <NavLink to={"/app"}>
              <img src={logo} alt="website logo" height={150} width={150} />
            </NavLink>
          </div>
          {/* desktop navigation */}
          <nav className="hidden md:flex gap-4 items-center">
            <NavLink to={"groups/new"}> New Group</NavLink>
            {/* TODO: make this a button */}
            <NavLink to={"#features"}>Add Expense</NavLink>
            <InviteDropDown open={isInviteOpen} openTrigger={() => setIsInviteOpen((prev) => !prev)}/>
            <DropdownMenu >
              <DropdownMenuTrigger>
                <Avatar className="border bg-gray-200 border-gray-300">
                  <AvatarImage
                    className="w-full"
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white mr-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
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
