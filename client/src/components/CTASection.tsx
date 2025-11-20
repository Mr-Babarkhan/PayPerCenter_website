import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to expand your business?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            BrokerCalls™ offers highly qualified inbound calls and phone leads. Reach out and get started today.
          </p>
          <div>
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold px-8 bg-white hover:bg-white/90 text-primary shadow-lg"
              data-testid="button-cta-contact"
              onClick={() => console.log('Let\'s Talk clicked')}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
