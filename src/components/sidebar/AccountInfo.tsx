import {Button} from "@/components/ui/button.tsx";


function AccountInfo() {
    return (
        <div className={"border-b mb-4 mt-2 pb-4 border-stone-300"}>
            <Button
                variant={"ghost"}
                className={"flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center justify-start"}>
                <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar" className="size-8 rounded shrink-0 bg-violet-500 shadow"/>
                <div className="text-start">
                    <span className="text-sm font-bold block">Srikar Akella</span>
                    <span className="text-xs block text-stone-500">srikar@dev.com</span>
                </div>
            </Button>
        </div>
    );
}

export default AccountInfo;