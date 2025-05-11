import { DollarSign } from "lucide-react"


function Expenses() {
  return (
    <div className="flex justify-between bg-white shadow-sm rounded-2xl px-4 py-2 bg-back-lt
    
    hover:bg-back-lt/5">
        <div className="flex gap-2 items-center">
        <div className="bg-gradient h-15 w-15 rounded-full flex justify-center items-center">
            <DollarSign />
        </div>
        <div>
            <h3 className="text-lg font-semibold">Dinner at Restaurant</h3>
            <p className="text-sm text-gray-200">Srikar, Pranu</p>
            <p className="text-xs text-gray-300">28th Mar 2025, 7:48pm</p>
        </div>
        </div>
        <div className="flex flex-col justify-around">
            <h2 className="text-lg">$120</h2>
            <p className="text-sm text-gray-300">Paidby srikar</p>
        </div>
    </div>
  )
}

export default Expenses