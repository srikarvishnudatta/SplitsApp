import { getGroupById } from "@/api/groupsApi";
import Expenses from "@/components/Expenses";
import InvitationForm from "@/components/InvitationForm";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GroupData, MemberType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Plus, Receipt, Settings, Trash, Users } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

function GroupDetailPage() {
  const [selected, setSelected] = useState('expenses');
  const params = useParams();
  const groupId = parseInt(params.groupId!) ;
  const {data} = useQuery<unknown, unknown, GroupData>({
    queryKey:["groups", groupId],
    queryFn: () => getGroupById(groupId),
    staleTime: 1000*60*1
  });
  return (
    <section className="px-4 sm:px-6 lg:px-2 mt-6">
      <h1 className="text-3xl mt-25 font-bold">
        {data?.groupName}
      </h1>
      {/* balances section */}
      <div className="mt-4 bg-white shadow-sm rounded-2xl p-4 w-1/4 bg-back-lt">
      <h2 className="text-lg font-semibold">Balances</h2>
        <ul className="space-y-2 mt-4">
          <li className="flex justify-between">Srikar <span className="text-sm text-gray-300">owes</span> Pranu <span className="text-green-500">$12</span></li>
          <li className="flex justify-between">Pranu owes Vicky <span className="text-red-500">$2</span></li>
          <li className="flex justify-between">Vicky owed Pranu <span>$1</span></li>
        </ul>
      </div>

      <div className="pt-4 border-b border-b-white">
        {/* navigation for group settings like with values expenses, members, settings */}
        <Button variant={"link"} onClick={() => setSelected("expenses")}
          className={`${selected === "expenses" ? "rounded-none border-b border-b-primary text-primary":undefined}`}
          >
          <Receipt /><span>Expenses</span>
        </Button>
        <Button variant={"link"} onClick={() => setSelected("members")}
          className={`${selected === "members" ? "rounded-none border-b border-b-primary text-primary":undefined}`}
          >
          <Users />Members
        </Button>
        <Button variant={"link"} onClick={() => setSelected("settings")}
          className={`${selected === "settings" ? "rounded-none border-b border-b-primary text-primary":undefined}`}>
          <Settings />Settings
        </Button>
      </div>
      <div>
        <div className="flex justify-between py-4 ">
        <Select>
          <SelectTrigger className="w-[180px] border-primary text-primary">
            <SelectValue placeholder="All Members" />
          </SelectTrigger>
        <SelectContent className="bg-white text-primary">
          <SelectItem value="light">Srikar</SelectItem>
          <SelectItem value="dark">Pranu</SelectItem>
         <SelectItem value="system">Vicky</SelectItem>
        </SelectContent>
</Select>

          <Button className="text-white">
            <Plus /> New Expense
          </Button>
        </div>
      {selected === "expenses" && <><Expenses /><Expenses/></>}
      {selected === "members" && <Members members={data?.members} groupId={data?.id || 0}/>}
      {selected === "settings" && <GroupSettings />}
      </div>
    </section>
  )
}

function Members({members, groupId}:{members: MemberType[]|undefined, groupId:number}){
  const [toggleInvite, setToggleInvite] = useState(false);
  return <div className="space-y-2 mt-4">
    {members?.map((member, index) => (
      <div className="flex justify-between border border-gray-300 rounded-2xl px-2 py-1 wrap flex-wrap" key={index}>
        {/* avatar */}
        <div className="flex gap-2">
        <h3 className="text-white bg-gradient rounded-full h-12 w-12 flex items-center justify-center">{`${member.firstName.charAt(0)}${member.lastName.charAt(0)}`.toUpperCase()}</h3>
        <div className="text-sm  flex justify-center flex-col">
          <p>{`${member.firstName} ${member.lastName}`}</p>
          <p className="text-slate-300">{member.email}</p>
        </div>
        </div>
        <div className="text-red-400 flex items-center hover:underline transition-all duration-150">
          <Trash size={12}/> Remove
        </div>
      </div>
    ))}
    {toggleInvite ? <div className="bg-white p-4 rounded-2xl shadow-md">
      <InvitationForm groupId={groupId}/>
      <Button onClick={() => setToggleInvite(!toggleInvite)} variant={"outline"}
        className="text-primary mt-2"
        >Cancel</Button>
    </div>: 
    <div className="bg-white border border-primary/50 rounded-2xl p-4 shadow flex items-center gap-4">
      <p className="text-sm text-primary font-semibold">Click to invite your folks</p>
      <Button className="text-white" onClick={() => setToggleInvite(!toggleInvite)}>
      <Plus/> Invite
    </Button>
    </div>}
  </div>
}
function GroupSettings(){
  return <div>
    group settings
  </div>
}
export default GroupDetailPage;