import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready to expand your business?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
            Pay Per Calls™ offers highly qualified inbound calls and phone leads. Reach out and get started today.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg font-bold px-12 py-7 bg-white hover:bg-white/90 text-green-700 shadow-2xl hover:scale-105 transition-transform"
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