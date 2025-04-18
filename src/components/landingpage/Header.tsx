import { Wallet } from "lucide-react"
import { NavLink } from "react-router"
import { Button } from "../ui/button"

type SectionProps = {
    login: () => void
  }
function Header({login} : SectionProps){
    return <header className="sticky top-0 z-50 w-full border-b border-b-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">SplitsApp</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <NavLink to="#features" className="text-sm font-medium hover:text-purple-500 transition-colors">
                Features
              </NavLink>
              <NavLink to="#how-it-works" className="text-sm font-medium hover:text-purple-500 transition-colors">
                How It Works
              </NavLink>
              <NavLink to="#download" className="text-sm font-medium hover:text-purple-500 transition-colors">
                Download
              </NavLink>
            </nav>
            <div className="flex items-center gap-4">
              <NavLink to="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
              onClick={login}
              >
                Sign In
              </NavLink>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white" 
              onClick={login}>Get Started</Button>
            </div>
          </div>
    </header>
  }
  export default Header;
  