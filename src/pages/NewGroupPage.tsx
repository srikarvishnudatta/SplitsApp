import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMutation} from "@tanstack/react-query";
import {createGroup, sendInvite} from "@/api/api.ts";
import {ErrorType, InviteData, NewGroupType, PostResponse} from "@/types/types.ts";
import {FormEvent, useState} from "react";


function NewGroupPage() {
    const [groupName, setGroupName] = useState('');
    const [receiver, setReceiver] = useState('');
    const {data, isError, isSuccess, mutate} = useMutation<PostResponse, ErrorType, NewGroupType>({
        mutationFn: (data) => createGroup(data)
    });
    const {mutate : inviteMutate, isSuccess: inviteSuccess} = useMutation<PostResponse, ErrorType, InviteData>({
        mutationFn: (data) => sendInvite(data)
    })
    function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        mutate({group_name: groupName});
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
        <section>
            <form className={"flex flex-col gap-4 w-1/2 mx-auto"} onSubmit={submitHandler}>
                <h2 className={"font-bold text-xl"}>Create your group here:</h2>
                <Label>
                    Group Name:
                </Label>
                <input type={"text"} name={"group_name"} className={"border-1"}
                       onChange={(e)=> setGroupName(e.target.value)}/>
                <Button className={"bg-violet-400"}>
                    Submit
                </Button>
            </form>
            {isSuccess && <form action="" onSubmit={inviteHandler}>
                <h2>Now your invite your friends</h2>
                <Label>Enter their email</Label>
                {inviteSuccess && <p className={"bg-green-300"}>Invite sent successfully</p>}
                <input type={"text"} name={"group_name"} className={"border-1"}
                       value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                />
                <Button className={"bg-violet-400"}>
                    Invite
                </Button>
            </form>}
        </section>
    );
}

export default NewGroupPage;