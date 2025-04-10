
import {Outlet} from "react-router-dom";
import Header from "@/components/Header";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Footer from "@/components/Footer";

function LandingPageLayout() {
    // const accessToken = window.localStorage.getItem("accessToken");
    // if(accessToken) <Navigate to={"/"}/>
    return <BackgroundBeamsWithCollision className="flex flex-col">
        <Header />
    <Outlet/>
    <Footer />
  </BackgroundBeamsWithCollision>
}





export default LandingPageLayout;