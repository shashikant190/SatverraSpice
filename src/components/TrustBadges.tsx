import { ShieldCheck, Leaf, Sparkles, Truck } from "lucide-react";

const trustBadges = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "100% Pure",
    description: "No additives or fillers",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Farm Fresh",
    description: "Direct from Indian farms",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "No Chemicals",
    description: "Naturally processed",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Pan-India shipping",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Why Choose Satverra Spice Co.? ✨
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="bg-card rounded-2xl border-2 border-border p-4 md:p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary text-secondary-foreground mb-3">
                {badge.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm font-body">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
