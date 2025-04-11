import {Outlet} from "react-router";
import {NavLink} from "react-router-dom";
function MainLayout() {
    return (
        <main className={"max-w-[1340px] mx-auto flex flex-col"}>
            <header className={"my-4 flex justify-between"}>
                <h2 className={"text-bold text-3xl"}>Splits</h2>
                <nav className={"list-none flex gap-4 text-violet-400 uppercase font-semibold"}>
                    <li><NavLink to={"/app/invites"}>Invitations</NavLink></li>
                    <li><NavLink to={"/app/newExpense"}>Add Expense</NavLink></li>
                    <li><NavLink to={"/app/newGroup"}>Add Group</NavLink></li>
                    <li>Logout</li>
                </nav>
            </header>
            <Outlet/>
        </main>
    );
}

export default MainLayout;