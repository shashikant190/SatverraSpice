import Link from "next/link";
import { Button } from "../src/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../src/components/ProductCard";
import TrustBadges from "../src/components/TrustBadges";

export const metadata = {
  title: "Satverra Spice Co. – Pure Indian Spices",
  description:
    "Shop 100% pure turmeric and chilli powder from India. No chemicals, no additives.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/hero-kitchen.png"
          alt="Spice kitchen"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            Pure Spices, Happy Kitchens 🌶️
          </h1>

          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            100% pure turmeric & chilli powder, directly from Indian farms.
          </p>

          {/* <div className="flex gap-4 justify-center">
            <Link href="/product/turmeric">
              <Button variant="turmeric">
                Shop Turmeric <ArrowRight />
              </Button>
            </Link>

            <Link href="/product/chilli">
              <Button variant="chilli">
                Shop Chilli <ArrowRight />
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

            <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 max-w-3xl">
          <ProductCard type="turmeric" />
          <ProductCard type="chilli" />
        </div>
      </section>

      <TrustBadges />


    </>
  );
}