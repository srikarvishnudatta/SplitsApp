import { Bell, BellDot, Check, X } from "lucide-react"
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { acceptInvite, allInvites } from "@/api/api_v2";
import { useAuth } from "@/context/AuthContext";
import { InvitationResponse, InvitationStatusType } from "@/types/types";

interface InviteNotifsProps{
    open:boolean;
    openTrigger: () => void;
}

function InviteDropDown({open, openTrigger} : InviteNotifsProps) {
    const {accessToken} = useAuth();
    // first fetch the invites. if there are any.
    const {data, isFetched, refetch} = useQuery<InvitationResponse[]>({
        queryKey: ["invitations"],
        queryFn: () => allInvites(accessToken || '')
    });
    // use mutate here and pass it down to the props.
    const {mutate} = useMutation<unknown, unknown, InvitationStatusType>({
        mutationFn: (data) => acceptInvite(accessToken || '', data)
    });
    function acceptInvitation(id:number, status: number){
        mutate({id, status});
        setTimeout(() => refetch(), 200);
    }
    console.log(data)
  return (
    <DropdownMenu open={open} onOpenChange={openTrigger}>
        <DropdownMenuTrigger onClick={openTrigger} className="flex gap-0.5 items-center text-primary border px-2 py-1 rounded-2xl">
            Invites {data  && data?.length>0 ? <BellDot size={16}/>: <Bell size={16}/>}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 border-gray-200">
            {isFetched && data?.map((invite) => <Invite {...invite} key={invite.groupId} acceptInvitation={acceptInvitation}/>)}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
function Invite(props: InvitationResponse & {
    acceptInvitation: (id:number, status:number) => void
}){
    return <div className="flex justify-between items-center px-2 py-1 border border-gray-200 rounded-md">
        <div className="w-1/2">
            <p><span className="font-bold">{props.email}</span> invites you to join: <span className="font-semibold">{props.groupName}</span></p>
        </div>
        <div>
            <Button className="bg-red-500 text-white"
            onClick={() => props.acceptInvitation(props.id, 2)}
            >
                <X />
            </Button>
            <Button className="bg-green-500 text-white"
            onClick={() => props.acceptInvitation(props.id, 1)}>
                <Check /> 
            </Button>
        </div>
    </div>
}
export default InviteDropDown