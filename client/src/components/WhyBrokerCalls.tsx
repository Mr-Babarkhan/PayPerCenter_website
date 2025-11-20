import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Phone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High and fast payouts",
    description: "We maximize our affiliate partners' profits by providing top performing offers and are continuously adding new verticals. Payouts are handled expeditiously and there are never any hidden commissions.",
  },
  {
    icon: Users,
    title: "Dedicated client services team",
    description: "Your dedicated account manager and client services team is always available to help you achieve your goals and maximize profit. We pride ourselves on our attention and dedication to our clients.",
  },
  {
    icon: Phone,
    title: "Exclusive inbound leads",
    description: "Start getting highly-qualified, exclusive calls. Prospective clients can be pre-screened based on a number of factors, ensuring they are qualified before ever speaking with one of your agents.",
  },
  {
    icon: BarChart3,
    title: "Actionable reporting",
    description: "Don't play a guessing game with the efficacy of your campaigns. You'll have access to real-time reporting and insights relevant to your campaign. Recent activity and campaign success is a click away.",
  },
];

export default function WhyBrokerCalls() {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-2">Why Pay Per Calls™?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Lead Generation Services<br />Drive New Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Grow your company using Pay Per Calls™' lead generation solutions. Our mission is to help your company grow faster and more efficiently. Our advanced pay-per-call marketing technologies and strategies allow our highly-skilled team, formed by industry experts, to deliver performance that is second to none.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300 border-2"
              data-testid={`card-feature-${idx}`}
            >
              <div className="space-y-5">
                <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center">
                  <feature.icon className="w-9 h-9 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
