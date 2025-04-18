import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePageTest from "./pages/HomePageTest";
import GroupDetailPage from "./pages/GroupPageTest";
import HomePage from "./pages/HomePage";

function App() {
  return <Routes>    
        <Route path="/" element={<LandingPage/>}/>
      <Route path="app" element={<HomePageTest />}/>
      <Route path="app/home" element={<HomePage />}/>
      <Route path="app/groups/:groupId" element={<GroupDetailPage/>}/>
  </Routes>
}
export default App
