import { forwardRef, useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { EyeOff, Eye } from "lucide-react";

type InputProps = {
    isError?:boolean
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [viewPassword, setViewPassword] = useState(false);
    return <div className="space-y-2">
        <Label className="text-sm font-light">Password</Label>
       <div className="relative">
       <input 
        ref={ref}
        placeholder="**********"
        className={`px-3 py-1 w-full border rounded-md focus-visible:ring-0 border-gray-200 ${props.isError && "border-red"}`}
        type={viewPassword ? "text" : "password"} 
        />
        <Button className="absolute right-3 top-1 h-6 w-6" type="button" 
          onClick={() => setViewPassword((prev) => !prev)} variant={"secondary"}>
              {viewPassword ? <EyeOff /> : <Eye />}
          </Button>
       </div>
    </div>
});
export default PasswordInput;