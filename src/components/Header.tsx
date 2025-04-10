import {NavLink} from "react-router-dom";

function Header() {

  return (
        <header className="absolute top-1 w-full max-w-[1340px] px-2">
            <nav className={"flex justify-between py-4"}>
                <h2 className={"font-bold italic text-2xl text-white"}><NavLink to={"/"}>Splits</NavLink></h2>
                <div className={"space-x-2"}>
                    <NavLink to={"/signup"} className={"text-white border-1 px-4 py-2 border-slate-900 rounded-sm bg-violet-400"}>Join Us</NavLink>
                    <NavLink to={"/login"} className={" border-1 border-violet-400 px-4 py-2 text-white rounded-sm font-light"}>Login</NavLink>
                </div>
            </nav>
        </header>
  )
}

export default Header