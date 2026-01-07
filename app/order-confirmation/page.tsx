"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../../src/components/ui/button";

export default function OrderConfirmationPage() {
  const params = useSearchParams();
  const orderNumber = params.get("orderNumber");

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Order Confirmed 🎉
      </h1>

      <p className="mb-6">Your Order ID:</p>
      <p className="text-2xl font-mono mb-8">
        {orderNumber}
      </p>

      <div className="flex gap-4 justify-center">
        <Link href="/track-order">
          <Button>Track Order</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
    </div>
  );
}
