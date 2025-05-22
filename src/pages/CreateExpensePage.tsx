import { createExpense } from "@/api/expenseApi";
import DataInput from "@/components/ui-custom/DataInput"
import SelectInput from "@/components/ui-custom/SelectInput";
import TextAreaInput from "@/components/ui-custom/TextAreaInput"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { GroupState } from "@/redux";
import { ExpenseType } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select';

function CreateExpensePage() {
  const {groups} = useSelector<GroupState, GroupState>((state) => state.groups);
  const [id, setId] = useState<number | null>(null);
  const [paidBy, setPaidBy] = useState<string | null>(null);
  const [splitAmong, setSplitAmong] = useState<string[] | null>(null);
  const {mutate} = useMutation<unknown, unknown, ExpenseType>({
    mutationFn: (data) => createExpense(data)
  })
  function handleSelectChange(e:ChangeEvent<HTMLSelectElement>){
    const {name, value} = e.target;
    if(name === "group"){
      const groupId = Number(value);
      setId(groupId);
    }
    if(name === "paidBy"){
      const name = value;
      setPaidBy(name);
    }
  }
  async function submitHandler(ev: FormEvent<HTMLFormElement>){
    ev.preventDefault();
    if(paidBy && splitAmong){
      const fd = new FormData(ev.currentTarget);
      const someData = Object.fromEntries(fd);
      const data : ExpenseType = {
        expenseName: someData.expenseName as string,
        expenseDesc: someData.description as string,
        amount: Number(someData.number),
        groupId: Number(someData.groupId),
        paidBy,
        splitAmong
      }
      console.log(data);
      mutate({
        ...data,
      })
    }
  }
  const members = groups.find(group => group.id === id)?.members;
  return (
    <section className="mt-25 w-1/2 mx-auto h-screen">
        <form className="bg-white p-2 md:p-4 lg:p-6 rounded-md shadow-md flex flex-col gap-4" onSubmit={submitHandler}>
        <h2 className={"text-primary font-semibold text-3xl"}>Create a new expense:</h2>
            <DataInput 
            type="text"
            name="expenseName"
            className={"px-3 py-1 border border-gray-300 w-full rounded-md"}
            label="Expense Name"
            labelStyle="font-medium"
            placeholder="eg: Walmart bill"
            />
            <TextAreaInput />
            <DataInput label="Amount" name="amount" type="number" placeholder="20$" labelStyle="font-medium"/>
            <SelectInput name="group" id="group" onChange={handleSelectChange} label="Groups">
              <option value={""}>-- select a group --</option>
              {groups.map((group) => <option key={group.id} value={group.id}>{group.groupName}</option>)}
            </SelectInput>
            <SelectInput name="paidBy" id="member" onChange={handleSelectChange} label="Paid by">
              {members?.map((member, index) => <option key={index} value={member.email}>{member.firstName} ({member.email})</option>)}
            </SelectInput>
            <Label>
              Split Among
            </Label>
            <Select 
            isMulti
            onChange={(selected) => setSplitAmong(selected.flatMap(option => option.value))}
            options={members?.map(member => ({value:member.email, label: `${member.firstName} (${member.email})`}))}
            name="splitAmong"
            />
            <Button className="text-white" type="submit">
              Submit
            </Button>
        </form>
    </section>
  )
}

export default CreateExpensePage