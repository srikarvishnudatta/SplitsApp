import { BellIcon } from "lucide-react"

type BellProps = {
    isActive: boolean
}

function Bell({isActive}:BellProps) {
  return (
    <div className="relative bg-primary text-white p-1 rounded-2xl">
        <BellIcon />
        {isActive && <div className="absolute top-0 right-0 bg-red-400 h-2 w-2 rounded-2xl">
        </div>}
    </div>
  )
}

export default Bell;