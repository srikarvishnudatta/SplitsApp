import Header from "@/components/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/Footer.tsx";

function LandingPageLayout() {
    return (
        <main className={"max-w-[1340px] mx-auto  h-screen"}>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
}

export default LandingPageLayout;