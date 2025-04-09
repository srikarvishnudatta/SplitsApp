
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {GroupCardType} from "@/types/types.ts";
import {NavLink} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {deleteGroup} from "@/api/http.ts";

function GroupCard(props:GroupCardType) {
    async function deleteHandler(group_id:number){
        await deleteGroup(group_id)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
                <CardDescription>{props.members}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>_20</p>
            </CardContent>
            <CardFooter>
                <NavLink to={props.link} className={"underline"}>Open group</NavLink>
                <Button variant={"destructive"} onClick={() => deleteHandler(props.group_id)}>Delete</Button>
            </CardFooter>
        </Card>

    );
}

export default GroupCard;