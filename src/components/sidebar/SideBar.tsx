import AccountInfo from "@/components/sidebar/AccountInfo.tsx";
import Search from "./Search.tsx"
import RouteSelect from "@/components/sidebar/RouteSelect.tsx";
import {Logout} from "@/components/sidebar/Logout.tsx";
function SideBar() {
    return (
        <div className={"w-1/5"}>
            {/*Sidebar content*/}
            <div className={"overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] px-2"}>
                <AccountInfo />
                <Search />
                <RouteSelect />
            </div>
            {/*Logout button*/}
            <div>
                <Logout />
            </div>
        </div>
    );
}

export default SideBar;