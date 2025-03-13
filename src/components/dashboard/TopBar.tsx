import { FiCalendar } from "react-icons/fi"

function TopBar() {
    return (
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
            <div className="flex justify-between items-center p-0.5">
                <div>
            <span className="text-sm font-bold block">
                {getGreetings()}, Srikar
            </span>
                    <span className="text-xs block text-stone-500 ">
                {getTodayDate()}
            </span>
                </div>

                <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-biolet-100 hover:text-violet-700 px-3 py-1.5 rounded">
                    <FiCalendar />
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}
function getTodayDate(){
    const today = new Date();

    function getOrdinalSuffix(day:number) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
    const dayOfWeek = today.toLocaleString('en-US', { weekday: 'short' });
    const month = today.toLocaleString('en-US', { month: 'short' });
    const dayOfMonth = today.getDate();
    const suffix = getOrdinalSuffix(dayOfMonth);
    const year = today.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}${suffix} ${year}`
}
function getGreetings(){
    const hours = new Date().getHours()
    if (hours >=0 && hours < 12){
        return "Good Morning"
    }else if (hours < 17){
        return "Good Afternoon"
    }else{
        return "Good Evening"
    }
}


export default TopBar