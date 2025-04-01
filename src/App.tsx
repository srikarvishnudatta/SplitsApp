import {Route, Routes} from "react-router-dom";
import LandingPage from "@/pages/LandingPage.tsx";
import LoginPage from "@/pages/auth/LoginPage";
import CreateAccountPage from "@/pages/auth/CreateAccountPage";
import VerifyAccountPage from "@/pages/auth/VerifyAccountPage";
import RequestNewPasswordPage from "@/pages/auth/RequestNewPasswordPage";
import NewPasswordPage from "./pages/auth/NewPasswordPage";
import LandingPageLayout from "@/layouts/LandingPageLayout.tsx";
import HomePageLayout from "@/layouts/HomePageLayout.tsx";
import HomePage from "@/pages/home/HomePage.tsx";
import GroupsPage from "@/pages/GroupsPage.tsx";
import TransactionsPage from "@/pages/TransactionsPage.tsx";
import InvitesPage from "@/pages/InvitesPage.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";
import GroupPage from "@/pages/GroupPage.tsx";


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
    <Route path={"/home"} element={<HomePageLayout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
    <Route element={<HomePageLayout/>}>
      <Route path={"/groups"} element={<GroupsPage/>} />
      <Route path={"/groups/:groupId"} element={<GroupPage/>}/>
      <Route path={"/transactions"} element={<TransactionsPage/>} />
      <Route path={"/invites"} element={<InvitesPage/>}/>
      <Route path={"/settings"} element={<SettingsPage/>} />
    </Route>
  </Routes>
}

export default App
