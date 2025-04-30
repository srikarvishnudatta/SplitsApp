import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPageNew";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./components/Layout";
import HomePageNew from "./pages/HomePageNew";
import GroupPage from "./pages/GroupPage";
import NewGroupPage from "./pages/NewGroupPage";
function App() {
  return <Routes>    
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="app" element={<Layout />}>
          <Route index element={<HomePageNew />}/>
          <Route path=":groupId" element={<GroupPage />}/>
          <Route path="groups/new" element={<NewGroupPage />}/>
        </Route>
  </Routes>
}
export default App
