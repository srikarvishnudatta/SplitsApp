import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { group } from "console"
import { Badge } from "lucide-react"
import { NavLink } from "react-router"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { GroupData } from "@/types/types"

function GroupCard(group: GroupData) {
  return (
    <NavLink to={`/app/groups/${group.group_id}`} key={group.group_id} className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-1 border-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-start">
                      <span>{group.name}</span>
                      {/* {group.youOwe > 0 ? (
                        <Badge variant="destructive" className="bg-red-500">You owe ${group.youOwe.toFixed(2)}</Badge>
                      ) : group.owedToYou > 0 ? (
                        <Badge variant="default" className="bg-green-500 text-white">
                          Owed ${group.owedToYou.toFixed(2)}
                        </Badge>
                      ) : (
                        <Badge variant="outline">Settled up</Badge>
                      )} */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-2 mr-2">
                        {/* {group.members.slice(0, 3).map((member) => (
                          <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ))} */}
                        {/* {group.members.length > 3 && (
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                            +{group.members.length - 3}
                          </div>
                        )} */}
                      </div>
                      <span className="text-sm text-muted-foreground">{group.members.length} members</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Last activity: {group.created_at}</p>
                      <p>{group.owner ? "admin": "not admin"}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="w-full flex justify-between text-sm">
                      <span>Total balance</span>
                      <span className="font-medium">$</span>
                    </div>
                  </CardFooter>
                </Card>
              </NavLink>
  )
}

export default GroupCard