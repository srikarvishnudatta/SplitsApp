import DataInput from "@/components/DataInput"
import TextAreaInput from "@/components/TextAreaInput"
import { GroupState } from "@/redux";
import { useSelector } from "react-redux";

function CreateExpensePage() {
  const {groups} = useSelector<GroupState, GroupState>((state) => state.groups);
  const members = groups.map(group => group.members);
  return (
    <section className="mt-25 w-1/2 mx-auto h-screen">
        <form className="bg-white p-2 md:p-4 lg:p-6 rounded-md shadow-md flex flex-col gap-4">
        <h2 className={"text-primary font-semibold text-3xl"}>Create a new expense:</h2>
            {/* expense name */}
            <DataInput 
            type="text"
            className={"px-3 py-1 border border-gray-300 w-full rounded-md"}
            label="Expense Name"
            placeholder="eg: Walmart bill"
            />
            {/* expense description */}
            <TextAreaInput />
            {/* ammount */}
            <DataInput label="Amount" type="number" placeholder="20$"/>
            {/* two select tags. one for groups and one members of that group */}
            <select name="group" id="group">
              {groups.map((group) => <option key={group.id}>{group.groupName}</option>)}
            </select>
            <select name="member" id="group">
              
            </select>
        </form>
    </section>
  )
}

export default CreateExpensePage