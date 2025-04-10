import { fetchHome } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ErrorType, HomeType} from "@/types/types.ts";

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
        <main className={"max-w-[1340px] mx-auto flex flex-col"}>
            <header className={"my-4 flex justify-between"}>
                <h2 className={"text-bold text-3xl"}>Splits</h2>
                <nav className={"list-none flex gap-4 text-violet-400 uppercase font-semibold"}>
                    <li>Invitations</li>
                    <li>Add Expense</li>
                    <li>Add Group</li>
                    <li>Logout</li>
                </nav>
            </header>
            <section className={"grow"}>
               <div>
                   {data?.groupData.map((group) =>{
                       return <div className={"text-violet-400"} key={group.group_id}>{group.name}</div>
                       }
                       )}
               </div>
            </section>
        </main>
    );
}

export default HomePage;