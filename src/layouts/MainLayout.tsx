import { Input } from "@/components/ui/input";
import {Outlet} from "react-router-dom";
import { Bell, UserRoundPen } from "lucide-react";


function MainLayout(){
    return <>
        <nav className="p-3 flex justify-between align-center">
            <h2 className="font-bold">
                Splits
            </h2>
            <Input className="w-1/2"/>
            <Bell className="self-center"/>
            <UserRoundPen className="self-center"/>
        </nav>
        <Outlet />
    </>
}
export default MainLayout