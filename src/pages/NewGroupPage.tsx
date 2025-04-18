import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMutation} from "@tanstack/react-query";
import {createGroup, sendInvite} from "@/api/api.ts";
import {ErrorType, InviteData, NewGroupType, PostResponse} from "@/types/types.ts";
import {FormEvent, useState} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function NewGroupPage() {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('')
    const [receiver, setReceiver] = useState('');
    const {data, isError, isSuccess, mutate} = useMutation<PostResponse, ErrorType, NewGroupType>({
        mutationFn: (data) => createGroup(data),
        onSuccess: () => toast("Group Created Successfully!")
    });
    const {mutate : inviteMutate, isError: inviteError} = useMutation<PostResponse, ErrorType, InviteData>({
        mutationFn: (data) => sendInvite(data),
        onSuccess: () => toast("Invite Sent Successfully!")
    })
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        mutate({group_name: groupName, description:groupDescription});
    }
    function inviteHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        if (data?.id !== 0) {
            inviteMutate({groupId: data?.id || 0, receiver: receiver});
            setReceiver('');
        }
    }
    if (isError) return <p>Error has occurred. Please try refreshing the page.</p>
    return (
        <section className="py-6 w-1/2 mx-auto">
            <form className={"flex flex-col gap-4"} onSubmit={submitHandler}>
                <h2 className={"font-bold text-2xl"}>Create your group here:</h2>
                <Label>
                    Group Name:
                </Label>
                <Input type={"text"} name={"group_name"} 
                    placeholder="eg: Trip to Paris, Camping Trip"
                className={"border-1"}
                       onChange={(e)=> setGroupName(e.target.value)}/>
                       <Label>
                        Description:
                       </Label>
                       <Textarea 
                        id="group-description"
                        placeholder="Add some details about this group"
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                        rows={3}
                       />
                <Button className={"bg-purple-400 text-white"}>
                    Submit
                </Button>
            </form>
            {isSuccess && <form  onSubmit={inviteHandler}
                className="space-y-5 mt-10">
                <h2 className="font-bold text-2xl">Now your invite your friends</h2>
                {isError && <p className="px-2 py-1 bg-red-300 rounded-xl">User can't be found, did you enter the right email?</p>}
                <Label>Enter their email</Label>
                <Input type={"text"} name={"group_name"} className={"border-1"}
                       value={receiver}
                       placeholder="johndoe@gmail.com"
                onChange={(e) => setReceiver(e.target.value)}
                />
                <Button className={"bg-purple-400 text-white"}>
                    Invite
                </Button>
            </form>}
        </section>
    );
}

export default NewGroupPage;