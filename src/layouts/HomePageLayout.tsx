import {Outlet} from "react-router-dom";
import HomeNavbar from "@/pages/home/HomeNavbar.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchProfile} from "@/api/http.ts";


function HomePageLayout() {
    const {getToken} = useAuth();
    const {data,isFetching} = useQuery({
        queryKey: ["dashboard"],
        queryFn: fetchData
    });
    async function fetchData(){
        const token = await getToken() as string;
        console.log(token);
        return await fetchProfile(token);
    }
    return (
        <SidebarProvider>
            <AppSideBar name={`${data?.first_name} ${data?.last_name}`} email={`${data?.email}`}/>
            <main className={"w-full px-4 py-2"}>
               <HomeNavbar/>
                {isFetching? <Skeleton className="w-[100px] h-[20px] rounded-full" />
                    :<Outlet />}
            </main>
        </SidebarProvider>
    );
}

export default HomePageLayout;