import GroupCard from "@/components/group/GroupCard.tsx";
import {GroupCardType} from "@/types/types.ts";
import {NavLink} from "react-router-dom";

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

function HomePage() {
    return (
        <div className={"mt-5"}>
            <h1 className={"text-3xl font-bold border-b border-b-1 border-b-gray-400"}>Groups</h1>
            <div className={"flex gap-4 mt-5"}>
                {data.map((group) => <GroupCard key={group.id} {...group}/>)}
                <NavLink to={"/groups"} className={"border border-dashed border-gray-500 p-4 flex items-center"}>
                    See all
                </NavLink>
            </div>
        </div>
    );
}

export default HomePage;