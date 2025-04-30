import { allInvites, updateInvite } from "@/api/api_v2"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { InvitationResponse, InviteData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Check, Trash, X } from "lucide-react"
import { ReactNode } from "react";

function InvitationPage() {
  const {accessToken} = useAuth();

  const {data, refetch} = useQuery<{
    sentInvitations: InvitationResponse[],
    receivedInvitations: InvitationResponse[]
  }>({
    queryKey: ["invitations"],
    queryFn: () => allInvites(accessToken || '')
  });
  async function updateInvitationStatus(id:number, status:number){
    await updateInvite(accessToken || '', {id, status});
    refetch();
  }
  console.log(data);
  return (
    <section className="px-4 sm:px-6 lg:px-2">
      <div className="mt-25 mb-10">
        <h1 className="text-3xl font-bold">Invitations</h1>
        <p className="text-sm text-gray-200">You can view all your invitations.</p>
      </div>

      {/* filtered sent */}
      <div>
        <h2 className="text-xl font-semibold">Invites Received</h2>
        {data?.receivedInvitations.length === 0 && <p>No new invitations</p>}
        {data?.receivedInvitations.map((invite) => <div className="border border-gray-600 rounded-md px-4 py-2 w-fit">
          <p>{invite.email} wants you to join: {invite.groupName}</p>
          <div className="flex gap-2 py-2 items-center">
          <Button className="bg-red-500 hover:bg-red-400"
          onClick={() => updateInvitationStatus(invite.id,2)}
          ><X />Decline</Button>
          <Button onClick={() => updateInvitationStatus(invite.id,1)}><Check/>Accept</Button> 
          </div>
        </div>)}
      </div>
      {/* filtered received */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Invites Sent</h2>
        {data?.sentInvitations.map((invite) => <InviteStatusCard key={invite.id} invite={invite} updateInvitationStatus={updateInvitationStatus}/>)}
      </div>
    </section>
  )
}
const statuses = [
  {
    status: 0,
    statusName:"PENDING",
    statusClass:" text-gray-300  border-gray-300 "
  },
  {
    status:1,
    statusName:"ACCEPTED",
    statusClass:" text-green-500  border-green-500 "
  },
  {
    status:2,
    statusName:"DECLINED",
    statusClass:" text-red-500  border-red-500 "
  },
  {
    status:3,
    statusName:"CANCELLED",
    statusClass:" text-red-800  border-red-800 "
  }
];
function InviteStatusCard({ invite, updateInvitationStatus}: {invite:InvitationResponse, updateInvitationStatus : (id:number, status:number) => void}){
  const stat = statuses.filter((stat) => stat.status === invite.status);
  return <div className="border border-gray-600 rounded-md px-4 py-2 w-fit">
                <p className="py-2">Invited {invite.email} to join your group {invite.groupName}</p>
    <span className={`mt-2 px-2 py-1 border rounded-2xl ${stat[0].statusClass}`}>{stat[0].statusName}</span>
    {invite.status === 0 && <Button className="bg-red-500 hover:bg-red-400 ml-2" 
            onClick={() => updateInvitationStatus(invite.id, 3)}
            ><Trash/>Cancel</Button>}
  </div>
}

export default InvitationPage