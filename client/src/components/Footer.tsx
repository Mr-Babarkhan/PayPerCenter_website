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
          <div className="flex flex-col md:flex-row items-center md:items-center gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pay Per Calls" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-bold">Pay Per Calls</span>
            </div>

            {/* ✅ Contact Email Added */}
            <a
              href="mailto:shoaibkhan@leaderscoverage.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-2 md:mt-0"
            >
              Contact: shoaibkhan@leaderscoverage.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Pay Per Calls™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
