import {NavLink} from "react-router-dom";

function Header() {

  return (
        <header>
            <nav className={"flex justify-between py-4"}>
                <h2 className={"font-bold italic text-2xl"}><NavLink to={"/"}>Splits</NavLink></h2>
                <div className={"space-x-2"}>
                    <NavLink to={"/create"} className={"border border-1 px-4 py-2 border-slate-900 rounded-sm"}>Join Us</NavLink>
                    <NavLink to={"/login"} className={"border border-1 px-4 py-2 bg-slate-900 text-white rounded-sm font-light"}>Login</NavLink>
                </div>
            </nav>
        </header>
  )
}

export default Header