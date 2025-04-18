import { Receipt } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

type FeaturesCardType = {
    title:string;
    content:string;
  }
  const featuresCardData: FeaturesCardType[] = [
    {title: "Easy Bill Splitting", content:"Split bills evenly or create custom splits based on individual usage or preferences."},
    {title: "Group Management", content:"Create multiple groups for different occasions - roommates, trips, events, and more."},
    {title: "Simplified Payments", content:"Send payment reminders and settle debts directly through the app with your preferred method."},
    {title:"Expense Analytics", content:"Track spending patterns and get insights into your shared expenses over time."}
  ]
  function FeaturesSection(){
    return <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 ">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-purple-100  px-3 py-1 text-sm text-purple-600">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Split bills with ease</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            SplitsApp provides all the tools you need to manage shared expenses and keep track of who owes what.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {featuresCardData.map((card, index) => (
          <Card key={index}>
          <CardHeader className="text-center">
            <Receipt className="h-10 w-10 text-purple-500 mx-auto mb-2" />
            <CardTitle>{card.title}</CardTitle>
            <CardContent className="px-0 pt-2">
              {card.content}
            </CardContent>
          </CardHeader>
        </Card>
        ))}
      </div>
    </div>
  </section>
  }
  export default FeaturesSection;