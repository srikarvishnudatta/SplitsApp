import { Wallet, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router";

function Footer(){
    return <footer className="w-full py-6">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold">SplitsApp</span>
        </div>
        <div className="flex gap-4">
          <NavLink to="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </NavLink>
          <NavLink to="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </NavLink>
          <NavLink to="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </NavLink>
          <NavLink to="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </NavLink>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SplitsApp. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
  }
  export default Footer;