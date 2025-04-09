import {Route, Routes} from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";


function App() {
  return <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
      </Route>
  </Routes>
}
export default App
