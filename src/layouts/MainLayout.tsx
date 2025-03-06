import { Input } from "@/components/ui/input";
import {Outlet} from "react-router-dom";
import { Bell, CircleUserRound  } from "lucide-react";
import logo from "/favicon-48.png"
import {useQuery} from "@tanstack/react-query";

function MainLayout(){
    useQuery({
        queryKey: ["invites"],
        queryFn: () => {}
    })
    
    return <main className={"max-w-4xl mx-auto"}>
        <nav className="p-3 flex justify-between align-center">
            <div>
                <img src={logo} alt="splits logo"/>
            </div>
            <Input className="w-1/2"/>
            <p className={"flex items-center gap-2"}>Invites <Bell className="self-center"/></p>
            <CircleUserRound className="self-center"/>
        </nav>
        <Outlet />
    </main>
}
export default MainLayout