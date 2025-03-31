import illustration from "/bg_illustration.svg"
import {NavLink} from "react-router-dom";
import {ArrowRight} from "lucide-react";
function LandingPage(){
   
    return <div className={"flex "}>
            <div className={"w-3/5 self-center space-y-3"}>
                <h1 className={"font-bold text-7xl"}>Split Expenses for free</h1>
                <p className={"text-2xl font-medium"}>Create. Invite. Split. Settle.</p>
                <div className={"flex gap-2 py-2"}>
                    <NavLink to={"/login"} className={"flex items-center border border-1 border-black px-2 py-2"}>Join us <ArrowRight size={16}/></NavLink>
                    <NavLink to={"/about"} className={"flex bg-black text-white p-2"}>Learn more </NavLink>
                </div>
            </div>
        <div className={"w-2/5 self-center"}>
            <img src={illustration} alt="background_illustration"/>
        </div>
        </div>
}

export default LandingPage
//
// <div className={"flex flex-col  gap-4"}>
//     <h1 className={"font-bold text-7xl"}>Split expenses for free</h1>
//     <p className={"text-2xl font-medium"}>Create. Invite. Split. Settle.</p>
// <div>
//     <h4 className={"text-gray-500 font-medium"}>Made in love ❤️ with:</h4>
//     <ul className={"flex gap-1 text-gray-600 font-semibold"}>
//         <li>React,</li>
//         <li>TailwindCSS,</li>
//         <li>NodeJS,</li>
//         <li>PostgreSQL</li>
//     </ul>
// </div>
// </div>