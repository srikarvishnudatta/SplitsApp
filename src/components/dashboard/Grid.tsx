import StatCards from "@/components/dashboard/StatCards.tsx";
import {RecentTransactions} from "@/components/dashboard/RecentTransactions.tsx";

function Grid() {
    return (
        <div className="grid px-4 grid-cols-12 gap-3">
            <StatCards />
            <RecentTransactions />
        </div>
    )
}

export default Grid