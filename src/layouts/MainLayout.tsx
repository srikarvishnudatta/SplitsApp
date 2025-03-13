import {Outlet} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import SideBar from "@/components/sidebar/SideBar.tsx";

function MainLayout(){
    useQuery({
        queryKey: ["invites"],
        queryFn: () => {}
    })
    return <main className={"bg-stone-100 text-stone-950 flex"}>
        <SideBar />
        <Outlet />
    </main>
}
export default MainLayout