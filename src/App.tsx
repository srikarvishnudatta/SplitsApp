import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GroupDetailPage from "./pages/GroupDetailPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import InvitationPage from "./pages/InvitationPage";
function App() {
  return <Routes>    
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="app" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path=":groupId" element={<GroupDetailPage />} />
          {/* />
          <Route path="new-group" element={<CreateGroupPage />}/>
          <Route path="invitations" element={<InvitationPage />} /> */}
        </Route>
  </Routes>
}
export default App
