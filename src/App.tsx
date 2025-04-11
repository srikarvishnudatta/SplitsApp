import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import LandingPageLayout from "./layouts/LandingPageLayout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import MainLayout from "@/layouts/MainLayout.tsx";
import NewGroupPage from "@/pages/NewGroupPage.tsx";
import InvitationsPage from "@/pages/InvitationsPage.tsx";
import NewExpensePage from "@/pages/NewExpensePage.tsx";


function App() {
  return <Routes>    
        <Route path="/" element={<LandingPageLayout/>}>
        <Route index element={<LandingPage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="signup" element={<SignupPage />}/>
        </Route>
      <Route element={<MainLayout/>}>
          <Route path="app" element={<HomePage/>}/>
          <Route path={"app/newGroup"} element={<NewGroupPage/>}/>
          <Route path={"app/invites"} element={<InvitationsPage/>}/>
          <Route path={"app/newExpense"} element={<NewExpensePage/>}/>
      </Route>
  </Routes>
}
export default App
