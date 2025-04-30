import { allGroups } from "@/api/api_v2";
import GroupCard from "@/components/GroupCard"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { GroupData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { NavLink } from "react-router";

function HomePage() {
  const {accessToken} = useAuth();
  const {error, data, isFetching} = useQuery<unknown, unknown, GroupData[]>({
    queryKey: ["groups"],
    queryFn: () => allGroups(accessToken || ''),
  });
  if(isFetching) return <p>Fetching your groups</p>;
  if(error) return <p>Cannot display content</p>
  return (
    <section className="px-4 sm:px-6 lg:px-2 ">
      <div className="mt-25 flex justify-between">
        <div>
        <h1 className=" text-3xl text-bold">Groups</h1>
        <p className="text-sm text-gray-200 my-2">You can view all of your groups here. Click on each group for more.</p>
        </div>
        <div className="flex gap-2 items-center">
          <Input placeholder="Filter group"/>
          <Button ><Plus /><NavLink to={"/app/new-group"}>New Group</NavLink></Button>
        </div>
      </div>
      <div>
        {data?.map((group) => <GroupCard {...group} key={group.id}/>)}
      </div>
    </section>
  );
}

export default HomePage;