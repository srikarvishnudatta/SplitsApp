import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMutation} from "@tanstack/react-query";
import {ErrorType, NewGroupResponse, NewGroupType} from "@/types/types.ts";
import {FormEvent, useState} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import InvitationForm from "@/components/InvitationForm";
import { createGroup } from "@/api/groupsApi";

function CreateGroupPage() {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const {data, isError, isSuccess, mutate} = useMutation<NewGroupResponse, ErrorType, NewGroupType
    >({
        mutationFn: (data) => createGroup(data),
        onSuccess: () => toast("Group Created Successfully!")
    });
    async function submitHandler(ev: FormEvent<HTMLFormElement>){
        ev.preventDefault();
        mutate({groupName, groupDescription});
    }
    if (isError) {
        return <p>Error has occurred. Please try refreshing the page.</p>
    }
    return (
        <section className="mt-25 w-1/2 mx-auto h-screen">
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
                <Button className={"bg-primary text-white"}
                >
                    Submit
                </Button>
            </form>
            {isSuccess && <InvitationForm groupId={data.groupId}/>}
        </section>
    );
}

export default CreateGroupPage;