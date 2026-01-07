"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../../src/components/ui/button";
import { Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";

const productData = {
  turmeric: {
    name: "Pure Turmeric Powder",
    price: 149,
    image: "/turmeric-jar.png",
  },
  chilli: {
    name: "Pure Chilli Powder",
    price: 129,
    image: "/chilli-jar.png",
  },
};

export default function ProductPage({
  params,
}: {
  params: { productId: "turmeric" | "chilli" };
}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const product = productData[params.productId];
  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/" className="flex items-center gap-2 mb-6 text-sm">
        <ArrowLeft size={16} /> Back
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-80 object-contain"
        />

        <div>
          <h1 className="font-display text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-bold mb-6">₹{product.price}</p>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 border rounded-lg"
            >
              <Minus />
            </button>

            <span className="text-xl font-display">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 border rounded-lg"
            >
              <Plus />
            </button>
          </div>

          <Button
            size="lg"
            variant={params.productId}
            onClick={() =>
              router.push(
                `/checkout?product=${params.productId}&quantity=${quantity}`
              )
            }
          >
            <ShoppingBag /> Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
