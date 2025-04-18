import { useAuth0 } from "@auth0/auth0-react";
import Header from "@/components/landingpage/Header";
import Footer from "@/components/landingpage/Footer";
import FeaturesSection from "@/components/landingpage/FeaturesSection";
import HeroSection from "@/components/landingpage/HeroSection";
import HowItWorksSection from "@/components/landingpage/HowItWorksSection";
import ReachMeOutSection from "@/components/landingpage/ReachoutToMe";
function LandingPage(){
  const {loginWithRedirect} = useAuth0();
  const login = () =>{
    loginWithRedirect();
  }
    return <main className="flex min-h-screen flex-col mx-auto max-w-7xl">
      <Header login={login}/>
      <HeroSection login={login}/>
      <FeaturesSection />
      <HowItWorksSection />
      <ReachMeOutSection />
      <Footer />
    </main>
}

export default LandingPage;