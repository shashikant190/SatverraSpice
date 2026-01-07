"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PRODUCT_META } from "@/lib/products";
import { OrderTimeline } from "@/components/OrderTimeline";

export default function TrackOrderClient({
  order,
}: {
  order: any;
}) {
  const router = useRouter();
  const { toast } = useToast();

  // ✅ loading states
  const [cancelling, setCancelling] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const firstItem = order.items?.[0];
  const product = firstItem
    ? PRODUCT_META[firstItem.product_name]
    : null;

  const canCancel =
    order.status === "pending" ||
    order.status === "confirmed";

  /* ================= CANCEL ORDER ================= */

  const cancelOrder = async () => {
    setCancelling(true);

    const res = await fetch(
      `/api/orders/${order.order_number}/cancel`,
      { method: "POST" }
    );

    setCancelling(false);

    if (res.ok) {
      toast({
        title: "Order cancelled",
        description: "Your order has been cancelled.",
      });
      router.refresh();
    } else {
      toast({
        title: "Cannot cancel order",
        variant: "destructive",
      });
    }
  };

  /* ================= DOWNLOAD INVOICE ================= */

  const downloadInvoice = async () => {
    setDownloading(true);

    try {
      const res = await fetch(
        `/api/orders/${order.order_number}/invoice`
      );

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Invoice-${order.order_number}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch {
      toast({
        title: "Failed to download invoice",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="container mx-auto max-w-2xl py-16 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Track Your Order</h1>
        <p className="text-muted-foreground">
          Order ID:{" "}
          <span className="font-mono">
            {order.order_number}
          </span>
        </p>
      </div>

      {/* PRODUCT CARD */}
      {product && (
        <div className="flex gap-4 items-center border rounded-xl p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={96}
            height={96}
            className="rounded-lg"
          />
          <div>
            <p className="font-bold">{product.name}</p>
            <p className="text-sm text-muted-foreground">
              Quantity: {firstItem.quantity}
            </p>
            <p className="font-semibold">
              ₹{order.total_amount}
            </p>
          </div>
        </div>
      )}

      {/* TIMELINE */}
      <OrderTimeline status={order.status} />

      {/* CUSTOMER INFO */}
      <div className="space-y-2 border rounded-xl p-4">
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Customer:</strong> {order.customer.full_name}</p>
        <p><strong>Mobile:</strong> {order.customer.mobile}</p>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 flex-wrap">
        {canCancel && (
          <Button
            variant="destructive"
            onClick={cancelOrder}
            disabled={cancelling}
          >
            {cancelling ? "Cancelling order..." : "Cancel Order"}
          </Button>
        )}

        <Button
          variant="outline"
          onClick={downloadInvoice}
          disabled={downloading}
        >
          {downloading
            ? "Downloading invoice..."
            : "Download Invoice"}
        </Button>
      </div>
    </div>
  );
}
