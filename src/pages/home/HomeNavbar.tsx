import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Input} from "@/components/ui/input.tsx";


function HomeNavbar() {
    return (
        <nav className={"flex items-center gap-10"}>
            <SidebarTrigger/>
            <Input placeholder={"Search"} className={"w-1/2 focus:outline-none"}/>
        </nav>
    );
}

export default HomeNavbar;