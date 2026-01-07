"use client";

import { useState } from "react";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { useToast } from "../../src/hooks/use-toast";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!orderId) {
    toast({
      title: "Order ID required",
      variant: "destructive",
    });
    return;
  }

  setLoading(true);

  // small delay to show loading UX nicely
  setTimeout(() => {
    window.location.href = `/track-order/${orderId}`;
  }, 400);
};


  return (
    <div className="container mx-auto max-w-md py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Track Your Order
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Enter Order ID (e.g. ORD-123456)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <Button type="submit" className="w-full" disabled={loading}>
  {loading ? "Finding your order..." : "View Order"}
</Button>

      </form>
    </div>
    
  );
}
