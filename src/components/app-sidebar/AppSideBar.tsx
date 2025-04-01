import { Users, Home, Inbox, BadgeDollarSign, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {NavLink} from "react-router-dom";
const items = [
    {
        title: "Home",
        url: "/home",
        icon: Home,
    },
    {
        title: "Invites",
        url: "/invites",
        icon: Inbox,
    },
    {
        title: "Groups",
        url: "/groups",
        icon: Users,
    },
    {
        title: "Transactions",
        url: "/transactions",
        icon: BadgeDollarSign,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]
interface AppSidebarProps{
    name:string;
    email:string;
}

function AppSideBar(props: AppSidebarProps) {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>SplitsApp</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className={"flex gap-2"}>
                    <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix" alt="avatar logo"
                         className={"bg-violet-800"} height={30} width={30}/>
                    <div className={"flex flex-col text-xs font-light text-gray-800"}>
                    <span>{props.name}</span>
                    <span>{props.email}</span>
               </div>
                </div>

            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSideBar;