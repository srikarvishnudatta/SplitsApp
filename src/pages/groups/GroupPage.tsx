
// this page is a individual group page. this features group details and transactions.
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchGroupById} from "@/api/http.ts";
import {GroupType} from "@/types/types.ts";

function GroupPage() {
    const params = useParams();
    const groupId = params.groupId as string;
    const {data} = useQuery<unknown, unknown, GroupType>({
        queryKey:["group"],
        queryFn: () => fetchGroupById(groupId)
    });
    
    if (data) console.log(data.group.group_name);
    return (
        <div>
            Group id is: {groupId}
        </div>
    );
}

export default GroupPage;