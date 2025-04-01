
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

function GroupCard(props:GroupCardType) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.members}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{props.content}</p>
            </CardContent>
            <CardFooter>
                <NavLink to={props.link}>Open group</NavLink>
            </CardFooter>
        </Card>

    );
}

export default GroupCard;