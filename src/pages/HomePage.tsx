import {useQuery} from "@tanstack/react-query";
import {fetchGroups} from "@/api/http.ts";

function HomePage(){
    const {data} = useQuery({
        queryKey: ["home"],
        queryFn: () => fetchGroups(),
    })
    console.log(data)
    return <main className="p-3">
        home

    </main>
}
export default HomePage