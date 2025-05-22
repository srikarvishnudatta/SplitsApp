import { cn } from "@/lib/utils";
import { Label } from "../ui/label"
import { ChangeEvent, ReactNode } from "react";

type SelectProps = {
  label?:string;
  id?:string;
  name?:string;
  onChange?:(e:ChangeEvent<HTMLSelectElement>) => void;
  className?:string;
  children?:ReactNode;
}

function SelectInput({label, id,name, onChange, className, children}: SelectProps) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <select name={name} id={id} className={cn(
        "py-2 px-3 border border-gray-300 rounded-md",
        className
      )}
      onChange={onChange}
      >
        {children}
      </select>
    </div>
  )
}

export default SelectInput;