import GroupCard from "@/components/group/GroupCard.tsx";
import {GroupCardType} from "@/types/types.ts";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";

const data : GroupCardType[] = [
    {
        id:1,
        title:"Home",
        members:"Srikar Pranu Vicky",
        content:"+20",
        link:"/id"
    },
    {
        id:2,
        title:"Home",
        members:"Srikar Pranu Vicky",
        content:"+20",
        link:"/id"
    }
]

function GroupsPage() {
    return (
        <div className={"mt-5"}>

            <h1 className={"text-3xl font-bold border-b border-b-1 border-b-gray-400"}>Groups</h1>
            <Button className={"mt-2"}>
                <Plus/> Create new
            </Button>
            <div className={"flex gap-4 mt-5"}>
                {data.map((group) => <GroupCard key={group.id} {...group}/>)}
            </div>
        </div>
    );
}

export default GroupsPage;