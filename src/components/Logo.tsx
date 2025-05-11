import { NavLink } from "react-router";
import { CreditCard } from "lucide-react";
type LogoProps = {
  path:string
  variant?: string
}

function Logo({path, variant}:LogoProps) {
  return (
    <NavLink to={path}>
          <h3 className={`flex items-center gap-2 font-bold text-2xl ${variant==="light" ? "text-white" : "text-text-sc"}`}><CreditCard />OweTo</h3>
    </NavLink>
    
  )
}

export default Logo