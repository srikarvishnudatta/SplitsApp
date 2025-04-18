import { useState } from "react"
import { Plus, Receipt, Users, Wallet, Search, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { NavLink } from "react-router"

// Mock data for groups
const groups = [
  {
    id: 1,
    name: "Roommates",
    members: [
      { id: 1, name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Alex", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "Jamie", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    totalBalance: 125.5,
    youOwe: 0,
    owedToYou: 125.5,
    lastActivity: "2 days ago",
    recentExpense: "Groceries",
  },
  {
    id: 2,
    name: "Trip to Barcelona",
    members: [
      { id: 1, name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Taylor", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "Jordan", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Casey", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    totalBalance: 320.75,
    youOwe: 85.25,
    owedToYou: 0,
    lastActivity: "1 week ago",
    recentExpense: "Hotel",
  },
  {
    id: 3,
    name: "Dinner Club",
    members: [
      { id: 1, name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Morgan", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Riley", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    totalBalance: 210.3,
    youOwe: 70.1,
    owedToYou: 0,
    lastActivity: "Yesterday",
    recentExpense: "Restaurant bill",
  },
  {
    id: 4,
    name: "Office Lunch",
    members: [
      { id: 1, name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 9, name: "Avery", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 10, name: "Quinn", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 11, name: "Blake", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 12, name: "Cameron", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    totalBalance: 95.2,
    youOwe: 0,
    owedToYou: 76.16,
    lastActivity: "3 days ago",
    recentExpense: "Takeout",
  },
]

export default function AppPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex min-h-screen flex-col max-w-7xl mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-b-gray-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">SplitsApp</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search groups..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex gap-1">
              <Users className="h-4 w-4" />
              <span>View Groups</span>
            </Button>

            <Button variant="outline" size="sm" className="hidden md:flex gap-1">
              <Receipt className="h-4 w-4" />
              <span>Add Expense</span>
            </Button>

            <Button size="sm" className="hidden md:flex gap-1 bg-teal-500 hover:bg-teal-600">
              <Plus className="h-4 w-4" />
              <span>New Group</span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-teal-500"></span>
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

      {/* Mobile Search - Only visible on mobile */}
      <div className="md:hidden p-4 border-b">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search groups..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Mobile Action Buttons - Only visible on mobile */}
      <div className="md:hidden flex justify-between p-4 border-b">
        <Button variant="outline" size="sm" className="flex-1 mr-2">
          <Users className="h-4 w-4 mr-1" />
          <span>Groups</span>
        </Button>
        <Button variant="outline" size="sm" className="flex-1 mr-2">
          <Receipt className="h-4 w-4 mr-1" />
          <span>Expense</span>
        </Button>
        <Button size="sm" className="flex-1 bg-teal-500 hover:bg-teal-600">
          <Plus className="h-4 w-4 mr-1" />
          <span>Group</span>
        </Button>
      </div>

      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Groups</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort by <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Most recent</DropdownMenuItem>
              <DropdownMenuItem>Alphabetical</DropdownMenuItem>
              <DropdownMenuItem>Highest balance</DropdownMenuItem>
              <DropdownMenuItem>Most active</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {filteredGroups.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No groups found</h3>
            <p className="text-muted-foreground mt-1">Try a different search or create a new group</p>
            <Button className="mt-4 bg-teal-500 hover:bg-teal-600">
              <Plus className="h-4 w-4 mr-1" />
              <span>Create New Group</span>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredGroups.map((group) => (
              <NavLink to={`/app/groups/${group.id}`} key={group.id} className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-1 border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-start">
                      <span>{group.name}</span>
                      {group.youOwe > 0 ? (
                        <Badge variant="destructive" className="bg-red-500">You owe ${group.youOwe.toFixed(2)}</Badge>
                      ) : group.owedToYou > 0 ? (
                        <Badge variant="default" className="bg-green-500 text-white">
                          Owed ${group.owedToYou.toFixed(2)}
                        </Badge>
                      ) : (
                        <Badge variant="outline">Settled up</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-2 mr-2">
                        {group.members.slice(0, 3).map((member) => (
                          <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ))}
                        {group.members.length > 3 && (
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                            +{group.members.length - 3}
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{group.members.length} members</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Last activity: {group.lastActivity}</p>
                      <p>Recent expense: {group.recentExpense}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="w-full flex justify-between text-sm">
                      <span>Total balance</span>
                      <span className="font-medium">${group.totalBalance.toFixed(2)}</span>
                    </div>
                  </CardFooter>
                </Card>
              </NavLink>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
