const footerLinks = [
  {
    title: "Insurance Leads",
    links: [
      "Life Insurance Leads",
      "Medicare Leads",
      "U65 Health Insurance",
      "Home Insurance Leads",
      "Auto Insurance Leads",
    ],
  },
  {
    title: "Financial Leads",
    links: [
      "Debt Settlement Leads",
      "Credit Repair Leads",
      "Mortgage Leads",
      "Tax Debt Leads",
    ],
  },
  {
    title: "Other Services",
    links: [
      "Cruise Line Leads",
      "Pest Control Leads",
      "Flight Booking Leads",
      "Home Services Leads",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Contact Us",
      "Blog",
      "Careers",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Other Lead Generation Services:</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigate to ${link}`);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">★</span>
            </div>
            <span className="font-bold">BrokerCalls</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 BrokerCalls™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
