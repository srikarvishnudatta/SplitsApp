import { sendInvite } from "@/api/groupsApi";
import { InviteData } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type InvitationFormProps = {
    groupId:number;
}
function InvitationForm({groupId} : InvitationFormProps) {
  const [receiver, setReceiver] = useState('');
  const {mutate , isError} = useMutation<unknown, unknown, InviteData>({
    mutationFn: (data) => sendInvite(data),
    onSuccess: () => toast("Invite Sent Successfully!")
})
  async function submitHandler(ev: FormEvent<HTMLFormElement>){
          ev.preventDefault();
          mutate({groupId, receiver})
      }
  return (
    <form onSubmit={submitHandler} className="space-y-2 mt-2">
        <h2 className="font-semibold text-2xl">Invite your folks</h2>
        
        <Label className="text-sm text-primary uppercase">Enter their email</Label>
                <Input type={"text"} name={"group_name"} className={`focus-visible:ring-0 ${isError ? "border-red-400": undefined}`}
                       value={receiver}
                       placeholder="johndoe@gmail.com"
                onChange={(e) => setReceiver(e.target.value)}
                />
                {isError && <p className="py-1 text-red-500 text-xs font-light">User can't be found, did you enter the right email?</p>}
                <Button className={"text-white"}>
                    Invite
                </Button>
    </form>
  )
}

export default InvitationForm