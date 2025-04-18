// import { fetchHome } from "@/api/api";
// import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {ErrorType, GroupData, HomeType} from "@/types/types.ts";
import HomeHeader from "@/components/homepage/Header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
function HomePage() {
  // const {data, error} = useQuery<unknown, ErrorType, HomeType>({
  //     queryKey: ["home"],
  //     queryFn: fetchHome,
  //     retry:false
  // });
  // const navigate = useNavigate();
  // useEffect(() => {
  //     if(error?.message === "Invalid Access Token") {
  //         console.log(error);
  //         localStorage.clear()
  //         navigate("/login");
  //     }
  // }, [error]);
  // console.log(data?.groupData)
  return (
    <main className="flex min-h-screen flex-col max-w-7xl mx-auto">
      <HomeHeader />
      <div className="flex items-center justify-between my-6">
        <h1 className="text-2xl font-bold">Your Groups</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Sort by <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Most recent</DropdownMenuItem>
            <DropdownMenuItem>Alphabetical</DropdownMenuItem>
            <DropdownMenuItem>Highest balance</DropdownMenuItem>
            <DropdownMenuItem>Most active</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        
      </div>
    </main>
  );
}
export default HomePage;
