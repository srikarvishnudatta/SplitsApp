import {Outlet} from "react-router-dom";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import AppSideBar from "@/components/app-sidebar/AppSideBar.tsx";
import HomeNavbar from "@/pages/home/HomeNavbar.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchProfile} from "@/api/http.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";

function HomePageLayout() {
    const {data,isFetching} = useQuery({
        queryKey: ["dashboard"],
        queryFn: fetchProfile
    })
    return (
        <SidebarProvider>
            <AppSideBar name={data?.data}/>
            <main className={"w-full px-4 py-2"}>
               <HomeNavbar/>
                {isFetching? <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    :<Outlet />}
            </main>
        </SidebarProvider>
    );
}

export default HomePageLayout;