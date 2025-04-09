import GroupCard from "@/components/group/GroupCard.tsx";
import { GroupResponseType} from "@/types/types.ts";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import { fetchGroups} from "@/api/http.ts";
import CreateGroup from "@/pages/groups/CreateGroup.tsx";
import {useState} from "react";


function GroupsPage() {
    const {data, refetch} = useQuery<unknown, unknown, GroupResponseType[]>({
        queryKey: ["groups"],
        queryFn: fetchGroups
    });
    const [dialog, setDialog] = useState(false);
    return (
        <div className={"mt-5"}>
            <CreateGroup open={dialog} handleOpen={setDialog} refetch={refetch}/>
            <h1 className={"text-3xl font-bold border-b border-b-1 border-b-gray-400"}>Groups</h1>
            <Button className={"mt-2"} onClick={() => setDialog(prevState => !prevState)}>
                <Plus/> Create new
            </Button>
            <div className={"grid grid-cols-4 gap-2"}>
                {data ? data?.map((group) => <GroupCard
                    key={group.group_id}
                    link={"/groups/"+group.group_id}
                    {...group}
                />): "No groups yet"}
            </div>
        </div>
    );
}
export default GroupsPage;