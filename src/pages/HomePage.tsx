import { allGroups } from "@/api/api_v2";
import GroupCard from "@/components/GroupCard"
import { useAuth } from "@/context/AuthContext";
import { GroupData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const {accessToken} = useAuth();
  const {error, data, isFetching} = useQuery<unknown, unknown, GroupData[]>({
    queryKey: ["groups"],
    queryFn: () => allGroups(accessToken || '')
  });
  if(isFetching) return <p>Fetching your groups</p>;
  if(error) return <p>Cannot display content</p>
  console.log(data);
  return (
    <section className="px-4 ">
      <h1 className="mt-25 text-2xl text-bold">Groups</h1>
      <p className="text-sm text-gray-800 my-4">You can view all of your groups here. Click on each group for more.</p>
      
      <div className="space-y-2">
        {data?.map((group) => <GroupCard {...group} key={group.id}/>)}
      </div>
    </section>
  )
}

export default HomePage;