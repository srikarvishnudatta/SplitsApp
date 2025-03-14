import {Outlet} from "react-router-dom";
import SideBar from "@/components/sidebar/SideBar.tsx";

function MainLayout(){
    return <main className={"bg-stone-100 text-stone-950 flex"}>
        <SideBar />
        <Outlet />
    </main>
}
export default MainLayout