import { GroupData } from "@/types/types"
import { ChevronRight, Users } from "lucide-react"
import { NavLink } from "react-router"


function GroupCard({id, groupDescription, groupName, members}:GroupData) {
  return (
    <div className="bg-back-lt border border-gray-600 rounded-sm py-2 px-4 hover:bg-primary/5">
        <NavLink to={`/app/${id}`} className={"flex justify-between"}>
        <div className="space-y-2">
        <h2 className="text-2xl text-semibold flex items-center gap-2">
          <span>{groupName}</span>
          <span className="bg-green-500 text-xs rounded-2xl px-2 py-1 ">Admin</span>
        </h2>
        <p className="text-sm">{groupDescription}</p>
        <div className="flex justify-between gap-10">
        <p className="text-xs underline text-gray-200 flex items-end gap-2"><Users size={14}/>{members.length === 1 ? members[0] : `${members[0]} + ${members.length-1} more`}</p>
        <p className="text-xs text-gray-100/90">Last Activity: 24th March 2025, 7:48pm</p>
        </div>
        </div>
        <div className="my-auto">
          <ChevronRight/>
        </div>
        </NavLink>
      </div>
  )
}

export default GroupCard