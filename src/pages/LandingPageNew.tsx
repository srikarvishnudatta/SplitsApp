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
import image from "@/assets/image.png";
import { testimonials } from "@/lib/constants";

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
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <NavBar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className=" text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Split Expenses <span className="gradient-text">Effortlessly</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 animate-fade-in">
            The easiest way to split bills with friends and family. Keep track
            of shared expenses and balances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <NavLink to="/signup">
              <Button size="lg" className="text-white">
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
          <div className="animate-slide-up ">
            <img src={image} alt="app-feature-image" height={400} />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 px-4" id="features">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features You'll love
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage shared expenses with friends, family,
            and roommates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all duration-300 hover:shadow-lg"
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

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of happy users who have simplified their expense
            tracking.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <div
              className="p-6 rounded-xl border shadow:md relative"
              key={index}
            >
              <div className="mb-8">
                {/* Quote marks */}
                <div className="absolute top-4 right-4 text-5xl text-primary/20 font-serif">
                  "
                </div>
                <p className="text-muted-foreground relative z-10">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default LandingPage;
