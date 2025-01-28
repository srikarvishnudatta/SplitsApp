import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import LandingLayout from "./layouts/LandingLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CreateAccountPage from "./pages/CreateAccountPage.tsx";


export default function App() {
  return <MantineProvider theme={theme}>
    <Routes>
      <Route path={"/"} element={<LandingLayout />}>
        <Route index element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/create" element={<CreateAccountPage />}/>
      </Route>
    </Routes>
  </MantineProvider>;
}
