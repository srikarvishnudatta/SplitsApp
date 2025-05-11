import { BellIcon } from "lucide-react"

type BellProps = {
    isActive: boolean
}

function Bell({isActive}:BellProps) {
  return (
    <div className="relative bg-secondary text-primary p-1 rounded-lg">
        <BellIcon />
        {isActive && <div className="absolute -top-0 -right-1 bg-red-400 h-2 w-2 rounded-2xl">
        </div>}
    </div>
  )
}

export default Bell;