import { fetchHome } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ErrorType, GroupData, HomeType} from "@/types/types.ts";

function HomePage() {
    const {data, error} = useQuery<unknown, ErrorType, HomeType>({
        queryKey: ["home"],
        queryFn: fetchHome,
        retry:false
    });
    const navigate = useNavigate();
    useEffect(() => {
        if(error?.message === "Invalid Access Token") {
            console.log(error);
            localStorage.clear()
            navigate("/login");
        }
    }, [error]);
    console.log(data?.groupData)
    return (
            <section className={"grow"}>
                <h1 className={"text-4xl my-2"}>Your Groups</h1>
                <p className={"text-gray-500"}>
                    You can view all your groups here
                </p>
               <div className={"space-y-2"}>
                   {data?.groupData.map((group) => <Group key={group.group_id} {...group}/>
                       )}
               </div>
            </section>
    );
}
function Group(props:GroupData){
    return <div  className={"p-4 border-1 border-gray-300 rounded-xl"}>
        <h3 className={"text-lg font-bold"}>{props.name}</h3>
        <p className={"italic"}>Admin {props.owner ? "Yes":"No"}</p>
        <p>Created on {new Date(props.created_at).toDateString()}</p>
        <div>
            Members: {props.members.map((member,index) => <span key={index}>{member}</span> )}
        </div>
    </div>
}

export default HomePage;