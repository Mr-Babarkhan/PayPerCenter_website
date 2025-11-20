import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Lead Generation World",
    date: "January 7-9",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
  },
  {
    title: "Affiliate Summit West",
    date: "January 15-17",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop",
  },
  {
    title: "ICMG Conference",
    date: "February 5-7",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full py-20 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the Pay Per Calls™ team in person! We attend industry events throughout the year and love connecting with current and potential partners. Check out past and upcoming events in the list below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {events.map((event, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group border-2"
              data-testid={`card-event-${idx}`}
              onClick={() => console.log(`Navigate to ${event.title}`)}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" strokeWidth={2.5} />
                  <span className="text-sm font-semibold">{event.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            data-testid="button-view-events"
            onClick={() => console.log('View All Events clicked')}
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
