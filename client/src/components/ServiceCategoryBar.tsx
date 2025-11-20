import { Heart, Car, FileText, Home, DollarSign, Plane, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="w-full bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-hide">
          {categories.map((category, idx) => (
            <button
              key={idx}
              data-testid={`button-category-${category.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center gap-2 min-w-[100px] hover:bg-white/10 p-4 rounded-xl transition-all hover:scale-105"
              onClick={() => console.log(`Navigate to ${category.label}`)}
            >
              <category.icon className="w-8 h-8 text-white" />
              <span className="text-xs md:text-sm font-medium text-white text-center whitespace-nowrap">
                {category.label}
              </span>
            </button>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}