import TopBar from "@/components/dashboard/TopBar.tsx";
import Grid from "./Grid.tsx"
function Dashboard() {
    return (
        <div className={"bg-white rounded-lg m-4 shadow h-screen w-4/5"}>
            <TopBar />
            <Grid />
        </div>
    );
}

export default Dashboard;