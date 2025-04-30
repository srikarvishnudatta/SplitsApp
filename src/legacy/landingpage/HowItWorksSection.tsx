function HowItWorksSection(){
    return <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-purple-100  px-3 py-1 text-sm text-purple-600 ">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, fast, and fair</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            SplitsApp makes expense sharing straightforward with just a few taps.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
        <img
          src="/placeholder.svg?height=550&width=550"
          width={550}
          height={550}
          alt="SplitsApp Demo"
          className="mx-auto rounded-lg object-cover shadow-xl"
        />
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-13 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Create a group</h3>
              <p className="text-muted-foreground">
                Start by creating a group and inviting your friends, roommates, or travel buddies.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-13 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Add expenses</h3>
              <p className="text-muted-foreground">
                Log expenses as they happen. Snap a photo of receipts for easy reference.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-13 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Split automatically</h3>
              <p className="text-muted-foreground">
                SplitsApp calculates who owes what and simplifies debts to minimize transactions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-13 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Settle up</h3>
              <p className="text-muted-foreground">
                Pay friends directly through the app or mark expenses as settled manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  export default HowItWorksSection;