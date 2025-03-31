import { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom"
import {useState} from "react";

type RouteValues = {
    id:number;
    selected: boolean;
    Icon: IconType;
    title:string;
    onClick?: () => void;
}

function NavigationRoute({id,
                    
                   selected, Icon, title, onClick
               }: RouteValues){
    return <Link to={"/home"} className={"flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow, _background-color,_color] "
        + (selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none")
    }
                 onClick={onClick}
    >
        <Icon /> {title} <span>0</span>
    </Link>
}
const routes: RouteValues[] = [
    {id:1, Icon:FiHome, selected:false, title:"Dashboard"},
    {id:2, Icon:FiUsers, selected:false, title:"Groups"},
    {id:3, Icon:FiPaperclip, selected:false, title:"Transactions"},
    {id:4, Icon:FiLink, selected:false, title:"Invites"},
    {id:5, Icon:FiDollarSign, selected:false, title:"Finance"}
]
function RouteSelect() {
    const [selected, setSelected] = useState<number>(1);
    return (
        <div className="space-y-1">
            {routes.map((route) => <NavigationRoute {...route}
                
                key={route.id} selected={selected === route.id} onClick={() => setSelected(route.id)}/>)}
        </div>
    )
}

export default RouteSelect