import { forwardRef } from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type DataInputProps = {
    id?:string,
    label?:string,
    type?:string,
    className?:string,
    placeholder?:string,
    labelStyle?:string,
    isError?:boolean,
    name?:string
}

const DataInput = forwardRef<HTMLInputElement, DataInputProps>((props, ref) =>{
    const {label, id, className, isError, labelStyle, ...rest} = props;
    return <div className="space-y-2">
        <Label htmlFor={id} className={cn(
            "text-sm font-light",
            labelStyle
        )}>
            {label}
        </Label>
        <input
        className={cn(
            "px-3 py-1 border border-gray-300 w-full rounded-md",
            {"border-red-400":isError},
            className
        )}
        id={id}
        ref={ref}
        {...rest}
        />
    </div>
});
export default DataInput;