import { getAllGroups } from "@/api/groupsApi";
import GroupCard from "@/components/GroupCard"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { GroupState, setGroups } from "@/redux";
import { GroupData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";

function HomePage() {
  const dispatch = useDispatch();
  const {groups} = useSelector<GroupState, GroupState>((state) => state.groups);
  const {data, isFetching} = useQuery<unknown, unknown, GroupData[]>({
    queryKey: ["groups"],
    queryFn: () => getAllGroups(),
  });
  useEffect(() =>{  
    if(data){
      dispatch(setGroups(data.data))
    }
  },[data]);
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
      {isFetching ? <Skeleton 
        className="h-[125px] w-full rounded-xl bg-primary/10 "
      /> : <div className="space-y-3">
        {groups.map((group) => <GroupCard {...group} key={group.id}/>)}
      </div>}
    </section>
  );
}

export default HomePage;