import {Route, Routes} from "react-router-dom";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import CreateAccountPage from "@/pages/CreateAccountPage.tsx";
import LandingLayout from "@/layouts/LandingLayout.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import VerifyAccountPage from "@/pages/VerifyAccountPage.tsx";
import RequestNewPasswordPage from "@/pages/RequestNewPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import Dashboard from "@/components/dashboard/Dashboard.tsx";


function App() {
  return <Routes>
    {/*Auth Routes*/}
    <Route path={"/"} element={<LandingLayout />}>
      <Route index element={<LandingPage/>}/>
      <Route path={"/login"} element={<LoginPage />}/>
      <Route path={"/create"} element={<CreateAccountPage />}/>
      <Route path={"/auth/verify"} element={<VerifyAccountPage />}/>
      <Route path={"/auth/resetPassword"} element={<RequestNewPasswordPage />}/>
      <Route path={"/auth/password/new"} element={<NewPasswordPage />} />
    </Route>
    {/*Protected Routes*/}
    <Route path={"/home"} element={<MainLayout />}>
      <Route index element={<Dashboard />}/>
    </Route>
  </Routes>
}

export default App
