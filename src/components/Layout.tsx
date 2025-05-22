import { Outlet } from "react-router"
import HomeNavbar from "./HomeNavbar"
import AddExpense from "./ui-custom/AddExpenseButton"

function Layout() {
  return (
    <><HomeNavbar />
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <Outlet />
      <AddExpense />
    </main>
    </>
  )
}

export default Layout