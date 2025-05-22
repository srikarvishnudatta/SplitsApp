import { Button } from "@/components/ui/button.tsx";
import { useMutation } from "@tanstack/react-query";
import { ErrorType, NewGroupResponse, NewGroupType } from "@/types/types.ts";
import { FormEvent, useCallback, useRef } from "react";
import { toast } from "sonner";
import InvitationForm from "@/components/InvitationForm";
import { createGroup } from "@/api/groupsApi";
import DataInput from "@/components/ui-custom/DataInput";
import TextAreaInput from "@/components/ui-custom/TextAreaInput";

function CreateGroupPage() {
  const groupNameRef = useRef<HTMLInputElement>(null);
  const groupDescRef = useRef<HTMLTextAreaElement>(null);

  const { data, isError, isSuccess, mutate } = useMutation<
    NewGroupResponse,
    ErrorType,
    NewGroupType
  >({
    mutationFn: (data) => createGroup(data),
    onSuccess: () => toast("Group Created Successfully!"),
  });
  const submitHandler = useCallback((ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const groupName = groupNameRef.current?.value;
    const groupDescription = groupDescRef.current?.value;
    if (!groupName || !groupDescription) return;
    mutate({ groupName, groupDescription });
  }, [groupNameRef, groupDescRef, mutate]);
  return (
    <section className="mt-25 w-1/2 mx-auto h-screen">
      <form className={"bg-white p-2 md:p-4 lg:p-6 rounded-md shadow-md flex flex-col gap-4"} onSubmit={submitHandler}>
        <h2 className={"text-primary font-semibold text-3xl"}>Create your group here:</h2>
        <DataInput 
        type={"text"}
        name={"group_name"}
        placeholder="eg: Trip to Paris, Camping Trip"
        label="Group Name"
        className={"px-3 py-1 border border-gray-300 w-full rounded-md"}
        ref={groupNameRef}
        />
        <TextAreaInput />
        <Button className={"bg-primary text-white"} type="submit">Submit</Button>
      </form>
      {isSuccess && <InvitationForm groupId={data.groupId} />}
      {isError && <p>Error has occurred. Please try refreshing the page.</p>}
    </section>
  );
}

export default CreateGroupPage;
