"use client"

import { useState } from "react"
import {
  Wallet,
  ArrowLeft,
  Plus,
  Receipt,
  CreditCard,
  MoreVertical,
  Users,
  Settings,
  Calendar,
  Search,
  Check,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NavLink, useNavigation } from "react-router"

// Mock data for a specific group
const groupData = {
  id: 1,
  name: "Roommates",
  description: "Shared expenses for our apartment",
  createdAt: "2023-01-15",
  totalBalance: 450.75,
  members: [
    {
      id: 1,
      name: "You",
      email: "you@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      balance: 125.5, // positive means others owe you
      isAdmin: true,
    },
    {
      id: 2,
      name: "Alex",
      email: "alex@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      balance: -75.25, // negative means they owe others
      isAdmin: false,
    },
    {
      id: 3,
      name: "Jamie",
      email: "jamie@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      balance: -50.25,
      isAdmin: false,
    },
  ],
  expenses: [
    {
      id: 101,
      description: "Groceries",
      amount: 85.75,
      date: "2023-05-10",
      paidBy: { id: 1, name: "You" },
      splitWith: [
        { id: 1, name: "You", amount: 28.58 },
        { id: 2, name: "Alex", amount: 28.58 },
        { id: 3, name: "Jamie", amount: 28.59 },
      ],
    },
    {
      id: 102,
      description: "Internet Bill",
      amount: 65.0,
      date: "2023-05-05",
      paidBy: { id: 1, name: "You" },
      splitWith: [
        { id: 1, name: "You", amount: 21.67 },
        { id: 2, name: "Alex", amount: 21.67 },
        { id: 3, name: "Jamie", amount: 21.66 },
      ],
    },
    {
      id: 103,
      description: "Utilities",
      amount: 120.0,
      date: "2023-05-01",
      paidBy: { id: 2, name: "Alex" },
      splitWith: [
        { id: 1, name: "You", amount: 40.0 },
        { id: 2, name: "Alex", amount: 40.0 },
        { id: 3, name: "Jamie", amount: 40.0 },
      ],
    },
    {
      id: 104,
      description: "Dinner",
      amount: 75.0,
      date: "2023-04-28",
      paidBy: { id: 3, name: "Jamie" },
      splitWith: [
        { id: 1, name: "You", amount: 25.0 },
        { id: 2, name: "Alex", amount: 25.0 },
        { id: 3, name: "Jamie", amount: 25.0 },
      ],
    },
    {
      id: 105,
      description: "Household Supplies",
      amount: 45.5,
      date: "2023-04-25",
      paidBy: { id: 1, name: "You" },
      splitWith: [
        { id: 1, name: "You", amount: 15.17 },
        { id: 2, name: "Alex", amount: 15.17 },
        { id: 3, name: "Jamie", amount: 15.16 },
      ],
    },
  ],
}

export default function GroupDetailPage() {
  const [activeTab, setActiveTab] = useState("expenses")
  const [searchQuery, setSearchQuery] = useState("")
  const [expenseFilter, setExpenseFilter] = useState("all")
  const [expenseSort, setExpenseSort] = useState("newest")

  // Filter expenses based on search query and filter selection
  const filteredExpenses = groupData.expenses.filter((expense) => {
    // Apply search filter
    if (searchQuery && !expense.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Apply expense filter
    if (expenseFilter === "paid-by-you" && expense.paidBy.id !== 1) {
      return false
    }
    if (expenseFilter === "you-owe" && expense.paidBy.id === 1) {
      return false
    }

    return true
  })

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (expenseSort === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    if (expenseSort === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    if (expenseSort === "highest") {
      return b.amount - a.amount
    }
    if (expenseSort === "lowest") {
      return a.amount - b.amount
    }
    return 0
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <NavLink to="/app" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <Wallet className="h-6 w-6 text-teal-500" />
              <span className="text-xl font-bold">SplitsApp</span>
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-1"
              
            >
              <Receipt className="h-4 w-4" />
              <span>Add Expense</span>
            </Button>
            <Button
              size="sm"
              className="hidden md:flex gap-1 bg-teal-500 hover:bg-teal-600"
              onClick={() => alert("Settle up functionality would go here")}
            >
              <CreditCard className="h-4 w-4" />
              <span>Settle Up</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Group Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="h-4 w-4 mr-2" />
                  Manage Members
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Group Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">Leave Group</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Action Buttons - Only visible on mobile */}
      <div className="md:hidden flex justify-between p-4 border-b">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 mr-2"
          
        >
          <Receipt className="h-4 w-4 mr-1" />
          <span>Add Expense</span>
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-teal-500 hover:bg-teal-600"
          onClick={() => alert("Settle up functionality would go here")}
        >
          <CreditCard className="h-4 w-4 mr-1" />
          <span>Settle Up</span>
        </Button>
      </div>

      <main className="flex-1 container py-6">
        <div className="space-y-6">
          {/* Group Header */}
          <div>
            <h1 className="text-2xl font-bold">{groupData.name}</h1>
            <p className="text-muted-foreground">{groupData.description}</p>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Created {new Date(groupData.createdAt).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <Users className="h-4 w-4 mr-1" />
              <span>{groupData.members.length} members</span>
            </div>
          </div>

          {/* Balance Summary */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Balance Summary</CardTitle>
              <CardDescription>Total group expenses: ${groupData.totalBalance.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groupData.members.map((member) => {
                  const isPositive = member.balance >= 0
                  return (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                      <div className={`font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
                        {isPositive
                          ? `gets back $${member.balance.toFixed(2)}`
                          : `owes $${Math.abs(member.balance).toFixed(2)}`}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-teal-500 hover:bg-teal-600"
                onClick={() => alert("Settle up functionality would go here")}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Settle All Debts
              </Button>
            </CardFooter>
          </Card>

          {/* Tabs for Expenses and Activity */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>

            <TabsContent value="expenses" className="space-y-4 pt-4">
              {/* Expense Filters */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search expenses..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={expenseFilter} onValueChange={setExpenseFilter}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Expenses</SelectItem>
                      <SelectItem value="paid-by-you">Paid by you</SelectItem>
                      <SelectItem value="you-owe">You owe</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={expenseSort} onValueChange={setExpenseSort}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest first</SelectItem>
                      <SelectItem value="oldest">Oldest first</SelectItem>
                      <SelectItem value="highest">Highest amount</SelectItem>
                      <SelectItem value="lowest">Lowest amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Expense List */}
              {sortedExpenses.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Receipt className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No expenses found</h3>
                  <p className="text-muted-foreground mt-1">
                    {searchQuery ? "Try a different search term" : "Add your first expense to get started"}
                  </p>
                  <Button
                    className="mt-4 bg-teal-500 hover:bg-teal-600"
                    >
                    <Plus className="h-4 w-4 mr-1" />
                    <span>Add an Expense</span>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedExpenses.map((expense) => {
                    const isPaidByYou = expense.paidBy.id === 1
                    const yourShare = expense.splitWith.find((split) => split.id === 1)?.amount || 0
                    const youPaid = isPaidByYou ? expense.amount : 0
                    const netAmount = youPaid - yourShare

                    return (
                      <Card key={expense.id} className="overflow-hidden">
                        <div className="flex border-l-4 border-teal-500">
                          <CardHeader className="flex-1">
                            <div className="flex justify-between">
                              <CardTitle>{expense.description}</CardTitle>
                              <div className="text-lg font-bold">${expense.amount.toFixed(2)}</div>
                            </div>
                            <CardDescription className="flex justify-between">
                              <div>
                                <span>{new Date(expense.date).toLocaleDateString()}</span>
                                <span className="mx-2">•</span>
                                <span>Paid by {expense.paidBy.name}</span>
                              </div>
                              {netAmount !== 0 && (
                                <Badge
                                  variant={netAmount > 0 ? "default" : "destructive"}
                                  className={netAmount > 0 ? "bg-green-500" : ""}
                                >
                                  {netAmount > 0
                                    ? `You get $${netAmount.toFixed(2)}`
                                    : `You owe $${Math.abs(netAmount).toFixed(2)}`}
                                </Badge>
                              )}
                            </CardDescription>
                          </CardHeader>
                        </div>
                        <CardContent>
                          <div className="text-sm space-y-1">
                            {expense.splitWith.map((split) => (
                              <div key={split.id} className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarFallback>{split.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span>{split.name}</span>
                                </div>
                                <div className="font-medium">${split.amount.toFixed(2)}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="members" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Group Members</CardTitle>
                  <CardDescription>Manage members and their balances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {groupData.members.map((member) => (
                      <div key={member.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium flex items-center">
                              {member.name}
                              {member.isAdmin && (
                                <Badge variant="outline" className="ml-2 text-xs">
                                  Admin
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{member.email}</div>
                          </div>
                        </div>
                        <div className={`font-medium ${member.balance >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {member.balance >= 0 ? (
                            <div className="flex items-center">
                              <Check className="h-4 w-4 mr-1" /> Gets back ${member.balance.toFixed(2)}
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <X className="h-4 w-4 mr-1" /> Owes ${Math.abs(member.balance).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Invite Member
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-1" />
                    Manage Permissions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
