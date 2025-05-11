import { getAllGroups } from "@/api/groupsApi";
import GroupCard from "@/components/GroupCard"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GroupData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { NavLink } from "react-router";

function HomePage() {
  const {error, data, isFetching} = useQuery<unknown, unknown, GroupData[]>({
    queryKey: ["groups"],
    queryFn: () => getAllGroups(),
  });
  if(isFetching) return <p>Fetching your groups</p>;
  if(error) return <p>Cannot display content</p>
  return (
    <section className="px-4 sm:px-6 lg:px-2 mt-6">
      <div className="mt-25 flex justify-between">
        <div>
        <h1 className=" text-4xl text-bold">Groups</h1>
        <p className="text-sm text-gray-500 my-2">You can view all of your groups here. Click on each group for more.</p>
        </div>
        <div className="flex gap-2 items-center">
          <Input placeholder="Filter group" className="focus-visible:ring-0"/>
          <Button className="text-white"><Plus /><NavLink to={"/app/new-group"}>New Group</NavLink></Button>
        </div>
      </div>
      <div className="space-y-3">
        {data?.data.map((group) => <GroupCard {...group} key={group.id}/>)}
      </div>
    </section>
  );
}

export default HomePage;