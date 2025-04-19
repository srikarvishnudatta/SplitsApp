import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Wallet, Search, Users, Receipt, Plus, Bell } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavLink } from "react-router";

function HomeHeader(){
  // add feature to get all invitations.
    return <header className="sticky top-0 z-50 w-full border-b border-b-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="">
        <NavLink to={"/app"} className={"flex items-center gap-2"}>
        <Wallet className="h-6 w-6 text-teal-500" />
        <span className="text-xl font-bold">SplitsApp</span>
        </NavLink>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search groups..."
            className="w-full pl-8"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="hidden md:flex gap-1">
          <Users className="h-4 w-4" />
          <NavLink to={"/app"}><span>View Groups</span></NavLink>
        </Button>

        <Button variant="outline" size="sm" className="hidden md:flex gap-1">
          <Receipt className="h-4 w-4" />
          <NavLink to={"/app/new-expense"}><span>Add Expense</span></NavLink>
        </Button>

        <Button size="sm" className="hidden md:flex gap-1 text-white bg-purple-500 hover:bg-purple-600">
          <Plus className="h-4 w-4" />
          <NavLink to={"/app/new-group"}><span>New Group</span></NavLink>
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-purple-500"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Activity</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
}
export default HomeHeader;