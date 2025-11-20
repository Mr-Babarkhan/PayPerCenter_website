import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Shoaib Khan", initials: "JG", image: "2.jpeg" },
  { name: "Hanzala Bashir", initials: "CM", image: "./1.jpeg" },
  { name: "Arslan Sarwar", initials: "SM", image: "big.png" },
  { name: "Rafia", initials: "SM", image: "https://api.dicebear.com/7.x/notionists/svg?seed=Stacey" },
];

export default function TeamCarousel() {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Pay Per Calls™ Team!</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our team is made up of some of the best in the industry. Check out our roster via the link below.
          </p>
        </div>

        <div className="relative overflow-hidden mb-8">
          <div className="flex gap-8 justify-center flex-wrap">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform p-4 rounded-lg cursor-pointer"
                data-testid={`avatar-team-${idx}`}
                onClick={() => console.log(`View ${member.name} profile`)}
              >
                <Avatar className="w-24 h-24 md:w-32 md:h-32 ring-4 ring-primary/10">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold text-sm md:text-base text-center">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="default"
            data-testid="button-meet-team"
            onClick={() => console.log('Meet the Team clicked')}
          >
            Meet the Team
          </Button>
        </div>
      </div>
    </section>
  );
}