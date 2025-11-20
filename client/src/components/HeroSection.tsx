import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-accent/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <rect x="50" y="100" width="100" height="120" rx="8" fill="hsl(178, 72%, 38%)" opacity="0.2" transform="rotate(-15 100 160)" />
                <rect x="250" y="100" width="100" height="120" rx="8" fill="hsl(24, 95%, 53%)" opacity="0.2" transform="rotate(15 300 160)" />
                <rect x="140" y="200" width="120" height="140" rx="8" fill="hsl(178, 72%, 38%)" opacity="0.15" />
                
                <circle cx="100" cy="140" r="25" fill="hsl(178, 72%, 38%)" />
                <rect x="85" y="165" width="30" height="60" rx="15" fill="hsl(178, 72%, 38%)" />
                
                <circle cx="300" cy="140" r="25" fill="hsl(24, 95%, 53%)" />
                <rect x="285" y="165" width="30" height="60" rx="15" fill="hsl(24, 95%, 53%)" />
                
                <circle cx="200" cy="220" r="30" fill="hsl(178, 72%, 45%)" />
                <rect x="182" y="250" width="36" height="70" rx="18" fill="hsl(178, 72%, 45%)" />
                
                <line x1="100" y1="120" x2="85" y2="95" stroke="hsl(178, 72%, 38%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="300" y1="120" x2="315" y2="95" stroke="hsl(24, 95%, 53%)" strokeWidth="3" strokeLinecap="round" />
                <line x1="200" y1="195" x2="200" y2="170" stroke="hsl(178, 72%, 45%)" strokeWidth="3" strokeLinecap="round" />
                
                <path d="M 120 80 Q 140 60 160 80" fill="none" stroke="hsl(178, 72%, 38%)" strokeWidth="2" />
                <path d="M 280 80 Q 300 60 320 80" fill="none" stroke="hsl(24, 95%, 53%)" strokeWidth="2" />
                <path d="M 180 150 Q 200 130 220 150" fill="none" stroke="hsl(178, 72%, 45%)" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Start getting qualified inbound phone leads today.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Stop chasing leads and start focusing on closing new customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary text-base font-semibold px-8"
                data-testid="button-hero-buy"
                onClick={() => console.log('Buy Calls clicked')}
              >
                BUY CALLS
              </Button>
              <Button
                size="lg"
                variant="default"
                className="bg-secondary hover:bg-secondary/90 text-base font-semibold px-8"
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
