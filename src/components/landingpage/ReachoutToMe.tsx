import { Button } from "../ui/button";

function ReachMeOutSection(){
    return <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Liked my work?</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Check out my other projects on my Github and reach out to me!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
            Email
          </Button>
  
        </div>
      </div>
    </div>
  </section>
  }
  export default ReachMeOutSection;