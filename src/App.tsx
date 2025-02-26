import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import CreateAccountPage from "@/pages/CreateAccountPage.tsx";
import LandingLayout from "@/layouts/LandingLayout.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import globalRouter from "@/lib/globalRouter.ts";
import VerifyAccountPage from "@/pages/VerifyAccountPage.tsx";
import RequestNewPasswordPage from "@/pages/RequestNewPasswordPage";
import NewPasswordPage from "./pages/NewPasswordPage";


function App() {
  globalRouter.navigate = useNavigate();
  return <Routes>
    <Route path={"/"} element={<LandingLayout />}>
      <Route index element={<LandingPage/>}/>
    <Route path={"/login"} element={<LoginPage />}/>
    <Route path={"/create"} element={<CreateAccountPage />}/>
    </Route>
    <Route path={"/auth/verify"} element={<VerifyAccountPage />}/>
    <Route path={"/auth/resetPassword"} element={<RequestNewPasswordPage />}/>
    <Route path={"/auth/password/new"} element={<NewPasswordPage />} />
    <Route path={"/home"} element={<MainLayout />}>
      <Route index element={<HomePage />}/>
    </Route>
  </Routes>
}

export default App
