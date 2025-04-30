import { GroupData } from "@/types/types"
import { NavLink } from "react-router"


function GroupCard({id, groupDescription, groupName, members}:GroupData) {
  return (
    <div className="border border-slate-300 rounded-xl p-2 hover:shadow-sm ">
        <NavLink to={`/app/${id}`} className={"flex justify-between"}>
        <div className="space-y-2">
        <h2 className="text-xl text-semibold">
          {groupName}
        </h2>
        {/* Remove this later */}
        <p>{groupDescription}</p>
        <p className="text-xs text-gray-600">{members.map((member, index)=><span key={index}>{member}</span>)}</p>
        <p className="text-[12px] text-gray-500">Last Activity: 24th March 2025, 7:48pm</p>
        </div>
        <div className="space-y-2">
        <p className="text-sm text-orange-800">Admin</p>
        <p className="text-green-400">$4.54</p>
        </div>
        </NavLink>
      </div>
  )
}

export default GroupCard