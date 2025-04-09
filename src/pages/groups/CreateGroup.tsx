import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import * as React from "react";
import {createGroup} from "@/api/http.ts";
import {useRef} from "react";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";
import {GroupResponseType} from "@/types/types.ts";

interface CreateGroupType {
    open: boolean,
    handleOpen: React.Dispatch<React.SetStateAction<boolean>>,
    refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<GroupResponseType[], unknown>>
}

function CreateGroup(props: CreateGroupType) {
    const ref = useRef<HTMLInputElement>(null)

    function submitHandler() {
        if (!ref.current) return
        createGroup(ref.current.value);
        props.handleOpen(false);
        if (props.refetch) props.refetch()
    }

    return (
        <Dialog open={props.open} onOpenChange={props.handleOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Group</DialogTitle>
                    <DialogDescription>
                        Enter your group name
                    </DialogDescription>
                </DialogHeader>
                <Input placeholder={"Enter your group name"} required ref={ref}/>
                <Button onClick={submitHandler}>Submit</Button>
            </DialogContent>
        </Dialog>

    );
}

export default CreateGroup;