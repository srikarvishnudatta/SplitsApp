import { groupById } from "@/api/api_v2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { GroupData } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Plus, Receipt, Settings, Trash, Users } from "lucide-react";
import { useCallback, useState } from "react";
import { useParams } from "react-router";

function GroupDetailPage() {
  const [selected, setSelected] = useState('expenses');
  const params = useParams();
  const groupId = params.groupId;
  const {accessToken} = useAuth();
  const queryFunction = useCallback(() => groupById(accessToken || '', parseInt(groupId || '')), [accessToken, groupId]);
  const {data} = useQuery<unknown, unknown, GroupData>({
    queryKey:["groups", groupId],
    queryFn: queryFunction,
    staleTime: 1000*60*1
  });
  useMutation({

  });
  return (
    <section className="px-4">
      <h1 className="text-3xl mt-25 font-bold">
        {data?.groupName}
      </h1>
      {/* balances section */}
      <div className="mt-4">
        <ul className="space-y-2 italic">
          <li>Srikar owes Pranu <span className="text-green-500">$12</span></li>
          <li>Pranu owes Vicky <span className="text-red-500">$2</span></li>
          <li>Vicky owed Pranu <span>$1</span></li>
        </ul>
      </div>

      <div className=" pt-4">
        {/* navigation for group settings like with values expenses, members, settings */}
        <Button variant={"link"} onClick={() => setSelected("expenses")}
          className={`${selected === "expenses" ? "bg-gradient text-white":undefined}`}
          >
          <Receipt />Expenses
        </Button>
        <Button variant={"link"} onClick={() => setSelected("members")}
          className={`${selected === "members" ? "bg-gradient text-white":undefined}`}
          >
          <Users />Members
        </Button>
        <Button variant={"link"} onClick={() => setSelected("settings")}
          className={`${selected === "settings" ? "bg-gradient text-white":undefined}`}>
          <Settings />Settings
        </Button>
      </div>
      {selected === "members" && <Members members={data?.members}/>}
      {selected === "settings" && <GroupSettings />}
    </section>
  )
}
type MembersProps = {
  members:string[] | undefined
}
function Members({members}:MembersProps){
  const [toggleInvite, setToggleInvite] = useState(false);
  return <div className="space-y-2 mt-4">
    {members?.map((member, index) => (
      <div className="flex justify-between border border-gray-300 rounded-2xl px-2 py-1 wrap flex-wrap" key={index}>
        {/* avatar */}
        <div className="flex gap-2">
        <h3 className="text-white bg-gradient rounded-full h-12 w-12 flex items-center justify-center">SA</h3>
        <div className="text-sm text-slate-600 flex justify-center flex-col">
          <p>{"Srikar Akella"}</p>
          <p>{member}</p>
        </div>
        </div>
        <div className="text-red-400 flex items-center hover:underline ">
          <Trash size={12}/> Remove
        </div>
      </div>
    ))}
    {toggleInvite ? <form className="py-2 space-y-2">
      <Input placeholder="Enter their email.." required/>
      <Button onClick={() => setToggleInvite(!toggleInvite)} variant={"outline"}
        className="text-primary"
        >Cancel</Button>
      <Button className="text-white ml-2">Send</Button>
    </form> : 
    <Button className="text-white" onClick={() => setToggleInvite(!toggleInvite)}>
      <Plus/> Invite
    </Button>}
  </div>
}
function GroupSettings(){
  return <div>
    group settings
  </div>
}
export default GroupDetailPage;