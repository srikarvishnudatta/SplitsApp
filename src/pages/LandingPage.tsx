import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CreditCard,
  Receipt,
  Shield,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router";

const features = [
  {
    icon: <Receipt className="h-10 w-10 text-primary" />,
    title: "Track Expenses",
    description:
      "Log expenses easily and track who paid what and who owes whom.",
  },
  {
    icon: <UsersRound className="h-10 w-10 text-primary" />,
    title: "Split Among Friends",
    description:
      "Split bills equally or unequally among friends, family, or roommates.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Settle Up",
    description:
      "Settle debts through multiple payment methods and keep a record of transactions.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Access",
    description:
      "Access your expenses from anywhere with our mobile-friendly design.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure & Private",
    description:
      "Your financial data is encrypted and secured with the latest technologies.",
  },
];



function LandingPage() {
  return (
    <>
    <NavBar />
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto ">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 flex items-center justify-between">
        <div className=" text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in">
            Split Expenses <span className="gradient-text">Effortlessly</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Never Owe anyone.
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10 animate-fade-in">
            The easiest way to split bills with friends and family. Keep track
            of shared expenses and balances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <NavLink to="/signup">
              <Button size="lg" className="text-white cursor-pointer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
            <NavLink to="/features">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary/80 hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="animate-slide-up hidden md:block">
            <div className="relative bg-white h-[400px] w-[350px] rounded-2xl">
              <div className="p-4 space-y-2">
                <div className="border-1 border-gray-200 rounded-xl p-4 shadow-md">
                  <h4 className=" text-sm">Paris Trip</h4>
                  <p className="font-semibold text-lg">$2040.83</p>
                  <p className="text-sm text-gray-500">Apr 23, 2025</p>
                </div>
                <div className="border-1 border-primary rounded-xl p-4 shadow-md">
                  <h4 className=" text-sm">Home Expenses</h4>
                  <p className="font-semibold text-lg">$200.13</p>
                  <p className="text-sm text-gray-500">Mar 23, 2025</p>
                </div>
                <div className="border-1 border-gray-200 rounded-xl p-4 shadow-md">
                  <h4 className=" text-sm">NYE Party</h4>
                  <p className="font-semibold text-lg">$20.25</p>
                  <p className="text-sm text-gray-500">Jan 01, 2025</p>
                </div>
                <Button variant={"default"} className="w-full text-white">Settle</Button>
              </div>
            </div>
          </div>
      </section>

      {/* Features section */}
      <section className="animate-slide-up py-20 px-6 shadow-lg bg-white rounded-xl" id="features">
        <div className="mb-20">

          <h6 className="text-sm md:text-md uppercase text-primary font-semibold mb-4">
            Features You'll love
          </h6>
          <div className="flex justify-between">
          <h2 className="text-4xl w-1/2">
            Because splitting expenses should not be hard
          </h2>
          <p className="text-sm md:text-md text-muted-foreground max-w-2xl mx-auto w-1/3 font-light">
            Everything you need to manage shared expenses with friends, family,
            and roommates. It is quite simple, create group and boom you are ready to split expenses.
          </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 "
            >
              <div className="mb-4 p-3 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* footer Section */}
      {/* TODO */}
    </main></>
  );
}
export default LandingPage;
