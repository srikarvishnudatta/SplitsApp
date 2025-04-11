import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchGroup} from "@/api/api.ts";

function GroupPage() {
    let params = useParams();
    const groupId = params.groupId || '';

    // useQuery({
    //     queryKey: ["group"],
    //     queryFn: () => fetchGroup(groupId)
    // });
    return (
        <section>

        </section>
    );
}

export default GroupPage;