import {Outlet} from "react-router-dom";
import logo from "/icons8-money-50.png"

function LandingLayout(){
    return <>
        <nav className={"max-w-[1340px] p-2 flex items-center gap-6"}>
            <div className={"flex items-center"}>
                <img src={logo} alt="" className={"self-center"}/>
                <h2 className={"text-black font-semibold text-2xl"}>
                    Splits
                </h2>
            </div>
            <ul className={"list-none flex gap-4"}>
                <li>GitHub</li>
                <li>About us</li>
            </ul>
        </nav>
        <Outlet/>

    </>
}

export default LandingLayout