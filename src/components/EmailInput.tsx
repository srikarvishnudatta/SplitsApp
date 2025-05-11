import { forwardRef } from "react";
import { Label } from "./ui/label";
import { InputProps } from "@/types/types";



const EmailInput = forwardRef<HTMLInputElement, InputProps>(function EmailInput(props, ref) {
    const {isError, ...rest} = props;
    return <div className="space-y-2">
        <Label
        htmlFor="email"
        className="text-sm font-light">Email</Label>
        <input 
        ref={ref}
        id="email"
        placeholder="johndoe@example.com"
        type="email"
        className={`px-3 py-1 w-full border rounded-md border-gray-200 ${isError ? "border-red-400" : ""}`}
        {...rest}
        />
    </div>
});
EmailInput.displayName = "EmailInput";
export default EmailInput;