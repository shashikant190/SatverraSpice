import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Flame, Star } from "lucide-react";

interface ProductCardProps {
  type: "turmeric" | "chilli";
}

const productData = {
  turmeric: {
    name: "Pure Turmeric Powder",
    description: "Golden goodness from Kerala's finest farms",
    price: "₹149",
    weight: "100g",
    image: "/turmeric-jar.png",
    badges: ["Best Seller", "Farm Fresh"],
    color: "bg-turmeric/20",
    borderColor: "border-turmeric",
    icon: <Leaf className="w-4 h-4" />,
  },
  chilli: {
    name: "Pure Chilli Powder",
    description: "Fiery red spice with authentic heat",
    price: "₹129",
    weight: "100g",
    image: "/chilli-jar.png",
    badges: ["Hot Favorite", "No Additives"],
    color: "bg-chilli/20",
    borderColor: "border-chilli",
    icon: <Flame className="w-4 h-4" />,
  },
};

const ProductCard = ({ type }: ProductCardProps) => {
  const product = productData[type];

  return (
    <Card
      className={`border-2 ${product.borderColor} overflow-hidden hover:-translate-y-1 transition-all`}
    >
      <div
        className={`${product.color} p-6 flex items-center justify-center relative`}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={160}
          height={220}
          className="object-contain animate-float"
          priority
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-display font-semibold bg-secondary text-secondary-foreground"
            >
              <Star className="w-3 h-3 fill-current" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl font-bold">
            {product.name}
          </h3>
          <span className="flex items-center gap-1 text-sm opacity-70">
            {product.icon}
            {product.weight}
          </span>
        </div>

        <p className="text-sm opacity-70 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-primary">
            {product.price}
          </span>

          <Link href={`/product/${type}`}>
            <Button
              size="sm"
              variant={type === "turmeric" ? "turmeric" : "chilli"}
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
