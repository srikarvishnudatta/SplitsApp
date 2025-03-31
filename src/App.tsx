import {Route, Routes} from "react-router-dom";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/auth/LoginPage";
import CreateAccountPage from "@/pages/auth/CreateAccountPage";
import MainLayout from "@/components/layouts/MainLayout";
import VerifyAccountPage from "@/pages/auth/VerifyAccountPage";
import RequestNewPasswordPage from "@/pages/auth/RequestNewPasswordPage";
import NewPasswordPage from "./pages/auth/NewPasswordPage";
import Dashboard from "@/components/dashboard/Dashboard.tsx";
import LandingPageLayout from "@/components/layouts/LandingPageLayout.tsx";


function App() {
  return <Routes>
    {/*Auth Routes*/}
    <Route path={"/"} element={<LandingPageLayout />}>
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
