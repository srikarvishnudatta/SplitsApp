import { sendInvite } from "@/api/api_v2";
import { useAuth } from "@/context/AuthContext";
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
  const {accessToken} =  useAuth();
  const [receiver, setReceiver] = useState('');
  const {mutate , isError} = useMutation<unknown, unknown, InviteData>({
    mutationFn: (data) => sendInvite(accessToken || '', data),
    onSuccess: () => toast("Invite Sent Successfully!")
})
  async function submitHandler(ev: FormEvent<HTMLFormElement>){
          ev.preventDefault();
          mutate({groupId, receiver})
      }
  return (
    <form onSubmit={submitHandler} className="space-y-5 mt-10">
        <h2 className="font-bold text-2xl">Now your invite your friends</h2>
        {isError && <p className="px-2 py-1 text-red-500 text-sm">User can't be found, did you enter the right email?</p>}
        <Label>Enter their email</Label>
                <Input type={"text"} name={"group_name"} className={isError ? "border-red-400": undefined}
                       value={receiver}
                       placeholder="johndoe@gmail.com"
                onChange={(e) => setReceiver(e.target.value)}
                />
                <Button className={" text-white"}>
                    Invite
                </Button>
    </form>
  )
}

export default InvitationForm