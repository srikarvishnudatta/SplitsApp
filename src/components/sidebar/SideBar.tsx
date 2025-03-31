import AccountInfo from "@/components/sidebar/AccountInfo.tsx";
import Search from "./Search.tsx"
import RouteSelect from "@/components/sidebar/RouteSelect.tsx";
import {Logout} from "@/components/sidebar/Logout.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "@/api/http.ts";
import { ResponseUser } from "@/types/types.ts";
import { useUser } from "@/context/userContext.tsx";
import { useEffect } from "react";
function SideBar() {
    const {setUser} =useUser()
    const {isError, isSuccess, data, isFetching} = useQuery<unknown, unknown, ResponseUser>({
        queryKey: ["profile"],
        queryFn: fetchProfile,
    });
    useEffect(() => {
        if(isSuccess){
            setUser(data)
        }else if(isError){
            console.log('cant fetch user profile')
        }
    }, [isSuccess, data, isError]);
    return (
        isFetching ? <p></p> : <div className={"w-1/5"}>
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