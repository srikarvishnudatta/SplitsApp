import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type SectionProps = {
    login: () => void
  }
function HeroSection({login} : SectionProps){
    return <section className="w-full py-12 md:py-24 lg:py-32 xl:pb-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Split Bills Effortlessly, Stay Friends Forever
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      SplitsApp makes it easy to split expenses with friends, roommates, and groups. Track who owes what,
                      settle up, and keep your relationships intact.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" 
                    onClick={login}>
                      Get Started now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                  
                </div>
                <div className="mx-auto flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="SplitsApp Preview"
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
  
  }
  export default HeroSection;