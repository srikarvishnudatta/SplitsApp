import {useMutation, useQuery} from "@tanstack/react-query";
import {acceptInvite, fetchAllInvites} from "@/api/api.ts";
import {InvitesType} from "@/types/types.ts";
import {Button} from "@/components/ui/button.tsx";

function InvitationsPage() {

    const {data} = useQuery({
        queryKey: ["invitations"],
        queryFn:  fetchAllInvites
    })
    return (
        <section>
            {data && data?.invites.map((invite => <Invitation key={invite.groupId} {...invite}/>))}
        </section>
    );
}
function Invitation(props:InvitesType){
    const {mutate} = useMutation({
        mutationFn: () => acceptInvite(props.groupId)
    })
    return <div>
        <p>{props.groupId}</p>
        <p>{props.groupName}</p>
        <p>{props.senderName}</p>
        <Button onClick={() => mutate()}>Accept</Button>
        <Button>Decline</Button>
    </div>
}
export default InvitationsPage;