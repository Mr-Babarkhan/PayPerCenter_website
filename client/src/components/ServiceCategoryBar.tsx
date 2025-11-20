import { Heart, Car, FileText, Home, DollarSign, Plane, Wrench } from "lucide-react";

const categories = [
  { icon: Heart, label: "Health Insurance", color: "text-primary" },
  { icon: Car, label: "Auto Insurance", color: "text-primary" },
  { icon: FileText, label: "Tax Debt", color: "text-primary" },
  { icon: Home, label: "Mortgage", color: "text-primary" },
  { icon: DollarSign, label: "Final Expense", color: "text-primary" },
  { icon: Plane, label: "Flights", color: "text-primary" },
  { icon: Wrench, label: "Home Services", color: "text-primary" },
];

export default function ServiceCategoryBar() {
  return (
    <section className="w-full bg-primary py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide">
          {categories.map((category, idx) => (
            <button
              key={idx}
              data-testid={`button-category-${category.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center gap-2 min-w-[100px] hover-elevate p-4 rounded-xl transition-transform"
              onClick={() => console.log(`Navigate to ${category.label}`)}
            >
              <category.icon className="w-8 h-8 text-primary-foreground" />
              <span className="text-xs md:text-sm font-medium text-primary-foreground text-center whitespace-nowrap">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
