import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Outlet} from "react-router-dom";


function LandingLayout(){
    return <div className="max-w-[1340px] mx-auto min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 items-center">
        <Outlet/>
        </div>
        <Footer />
    </div>
}

export default LandingLayout