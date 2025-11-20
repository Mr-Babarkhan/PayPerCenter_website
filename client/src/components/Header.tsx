import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "About Us",
      items: ["Our Story", "Team", "Careers", "Contact"],
    },
    {
      label: "Insurance",
      items: ["Health Insurance", "Auto Insurance", "Life Insurance", "Final Expense", "Home Insurance"],
    },
    {
      label: "Finance",
      items: ["Mortgage Leads", "Debt Settlement", "Credit Repair"],
    },
    {
      label: "Home Services",
      items: ["Pest Control", "HVAC", "Roofing"],
    },
    {
      label: "Legal",
      items: ["Tax Debt", "Legal Services"],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">★</span>
              </div>
              <span className="text-xl font-bold">BrokerCalls</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  data-testid={`button-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-sm font-medium flex items-center gap-1 hover-elevate rounded-md"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-popover border border-popover-border rounded-md shadow-lg py-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        data-testid={`link-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm hover-elevate"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Navigate to ${subItem}`);
                        }}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              data-testid="button-nav-flights"
              className="px-4 py-2 text-sm font-medium hover-elevate rounded-md"
              onClick={() => console.log('Navigate to Flights')}
            >
              Flights
            </button>
            <button
              data-testid="button-nav-contact"
              className="px-4 py-2 text-sm font-medium hover-elevate rounded-md"
              onClick={() => console.log('Navigate to Contact Us')}
            >
              Contact Us
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary text-primary"
              data-testid="button-buy-calls"
              onClick={() => console.log('Buy Calls clicked')}
            >
              BUY CALLS
            </Button>
            <Button
              variant="default"
              className="bg-secondary hover:bg-secondary/90"
              data-testid="button-sell-calls"
              onClick={() => console.log('Sell Calls clicked')}
            >
              SELL CALLS
            </Button>
          </div>

          <button
            className="lg:hidden"
            data-testid="button-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full text-left font-medium py-2"
                  data-testid={`button-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => console.log(`Toggle ${item.label}`)}
                >
                  {item.label}
                </button>
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full border-primary text-primary" data-testid="button-mobile-buy">
                BUY CALLS
              </Button>
              <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90" data-testid="button-mobile-sell">
                SELL CALLS
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
