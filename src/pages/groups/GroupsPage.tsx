import GroupCard from "@/components/group/GroupCard.tsx";
import { GroupResponseType} from "@/types/types.ts";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {fetchGroups} from "@/api/http.ts";

function GroupsPage() {
    const {data} = useQuery<unknown, unknown, GroupResponseType[]>({
        queryKey: ["groups"],
        queryFn: fetchGroups
    });

    return (
        <div className={"mt-5"}>

            <h1 className={"text-3xl font-bold border-b border-b-1 border-b-gray-400"}>Groups</h1>
            <Button className={"mt-2"}>
                <Plus/> Create new
            </Button>
            <div className={"flex gap-4 mt-5"}>
                {data ? data?.map((group) => <GroupCard
                    key={group.id}
                    link={"/groups/"+group.id}
                    {...group}
                />): "No groups yet"}
            </div>
        </div>
    );
}
export default GroupsPage;