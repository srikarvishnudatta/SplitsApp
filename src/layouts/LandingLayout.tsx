import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


function LandingLayout() {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default LandingLayout