import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-background via-accent/10 to-primary/5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-lg animate-in fade-in slide-in-from-left-10 duration-1000">
              <img 
                src="/hero-illustration.svg" 
                alt="3 scenarios making a call to a call center" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8 animate-in fade-in slide-in-from-right-10 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Start getting qualified inbound phone leads today.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stop chasing leads and start focusing on closing new customers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary text-base font-bold px-10 py-6 hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="button-hero-buy"
                onClick={() => console.log('Buy Calls clicked')}
              >
                BUY CALLS
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-primary hover:bg-primary/90 text-base font-bold px-10 py-6 shadow-lg shadow-primary/30 transition-all"
                data-testid="button-hero-sell"
                onClick={() => console.log('Sell Calls clicked')}
              >
                SELL CALLS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
