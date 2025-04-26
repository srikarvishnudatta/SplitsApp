// import { fetchHome } from "@/api/api";
// import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {ErrorType, GroupData, HomeType} from "@/types/types.ts";
import { fetchGroups } from "@/api/network";
import GroupCard from "@/components/homepage/GroupCard";
import { Button } from "@/components/ui/button";
import { GroupData } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
function HomePage() {
  const {getAccessTokenSilently} = useAuth0();
  const fetchGroupsWrapper = async () =>{
    const accessToken = await getAccessTokenSilently();
    return fetchGroups(accessToken)
  }
  const {data, isFetching} = useQuery<unknown, unknown, GroupData[]>({
    queryKey:["groups"],
    queryFn: fetchGroupsWrapper
  });
  
  return (
    <>
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
        {/* render groups here */}
        {isFetching ? <p>Fetching group data</p>: (
          data?.map((group) => <GroupCard {...group}/>)
        )}
      </div>
    </>
  );
}
export default HomePage;
