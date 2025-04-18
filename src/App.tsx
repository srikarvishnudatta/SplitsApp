import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePageTest from "./pages/HomePageTest";
import GroupDetailPage from "./pages/GroupPageTest";
import HomePage from "./pages/HomePage";
import NewGroupPage from "./pages/NewGroupPage";
import Layout from "./components/homepage/Layout";
function App() {
  return <Routes>    
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/app" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path="/app/test" element={<HomePageTest />}/>
          <Route path="/app/groups/:groupId" element={<GroupDetailPage/>}/>
          <Route path="/app/new-group" element={<NewGroupPage />}/>
        </Route>
  </Routes>
}
export default App
