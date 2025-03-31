import {Outlet} from "react-router-dom";
import SideBar from "@/components/sidebar/SideBar.tsx";
import UserContextProvider from "@/context/userContext";

function MainLayout(){
    return <main className={"bg-stone-100 text-stone-950 flex"}>
        <UserContextProvider>
        <SideBar />
        </UserContextProvider>
        <Outlet />
        
    </main>
}
export default MainLayout