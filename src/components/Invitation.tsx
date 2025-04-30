import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InvitationFormProps{
    inviteHandler: (ev: FormEvent<HTMLFormElement>) => void;
    inviteSuccess: boolean;
    inviteError: boolean;
    receiver:string;
    setReceiver: React.Dispatch<React.SetStateAction<string>>;
}

function InvitationForm({inviteError, inviteHandler, inviteSuccess, receiver, setReceiver} : InvitationFormProps) {
  return (
    <form  onSubmit={inviteHandler}
                className="space-y-5 mt-10">
                <h2 className="font-bold text-2xl">Now your invite your friends</h2>
                {(!inviteSuccess && inviteError) && <p className="px-2 py-1 bg-red-300 rounded-xl">User can't be found, did you enter the right email?</p>}
                <Label>Enter their email</Label>
                <Input type={"text"} name={"group_name"} className={inviteError ? "border-red-400": undefined}
                       value={receiver}
                       placeholder="johndoe@gmail.com"
                onChange={(e) => setReceiver(e.target.value)}
                />
                <Button className={"bg-purple-400 text-white"}>
                    Invite
                </Button>
            </form>
  )
}

export default InvitationForm