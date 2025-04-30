import { Outlet } from "react-router"
import HomeNavbar from "./HomeNavbar"
import AddExpense from "./AddExpense"

function Layout() {
  return (
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto">
        <HomeNavbar />
        <Outlet />
        <AddExpense />
    </main>
  )
}

export default Layout