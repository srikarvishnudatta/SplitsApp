import { forwardRef } from "react";
import { Label } from "./ui/label";


const TextAreaInput = forwardRef<HTMLTextAreaElement>((props, ref) => {
    return <div className="space-y-2">
        <Label htmlFor="description">Description:</Label>
        <textarea
          id="description"
          placeholder="Add some details about this group"
          ref={ref}
          className="px-3 py-1 border w-full border-gray-300 rounded-md"
          rows={3}
        />
    </div>
});
export default TextAreaInput;