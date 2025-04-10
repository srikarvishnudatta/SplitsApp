import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import LandingPageLayout from "./layouts/LandingPageLayout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";


function App() {
  return <Routes>    
        <Route path="/" element={<LandingPageLayout/>}>
        <Route index element={<LandingPage />}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="signup" element={<SignupPage />}/>
        </Route>
      <Route path="app" element={<HomePage/>}/>
  </Routes>
}
export default App
