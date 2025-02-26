
import illustration from "/illustration.png"
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();
    return <div className={"max-w-[1340px] mx-auto flex justify-between w-[65%] mt-10"}>
            <div className={"flex flex-col justify-around gap-4"}>
                <h1 className={"font-bold text-7xl"}>Split expenses for free</h1>
                <p className={"text-2xl font-medium"}>Create. Invite. Split. Settle.</p>
                <div className={"flex gap-3 "}>
                   <Button
                       onClick={() => navigate("/login")}>
                       Login
                   </Button>
                    <Button variant={"outline"} className={"border border-blue-960"}
                            onClick={() => navigate("/create")}>
                        Join us Today
                    </Button>
                </div>
                <div>
                    <h4 className={"text-gray-500 font-medium"}>Made with:</h4>
                    <ul className={"flex gap-1"}>
                        <li>React</li>
                        <li>TailwindCSS</li>
                        <li>NodeJS</li>
                        <li>postgres</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={illustration} alt="illustration.png" loading={"lazy"}/>
            </div>
        </div>
}

export default LandingPage