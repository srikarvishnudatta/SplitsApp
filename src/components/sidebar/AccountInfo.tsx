import {Button} from "@/components/ui/button.tsx";
import { useUser } from "@/context/userContext";


function AccountInfo() {
    const {user} = useUser()
    return (
        <div className={"border-b mb-4 mt-2 pb-4 border-stone-300"}>
            <Button
                variant={"ghost"}
                className={"flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center justify-start"}>
                <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar" className="size-8 rounded shrink-0 bg-violet-500 shadow"/>
                <div className="text-start">
                    <span className="text-sm font-bold block">{user.first_name} {user.last_name}</span>
                    <span className="text-xs block text-stone-500">{user.email}</span>
                </div>
            </Button>
        </div>
    );
}

export default AccountInfo;