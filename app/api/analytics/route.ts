import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET() {
  try {
    requireAdmin();

    const orders = await db.order.findMany({
      include: { items: true },
    });

    const productCounts: Record<string, number> = {};
    const statusCounts: Record<string, number> = {
      pending: 0,
      confirmed: 0,
      shipped: 0,
      delivered: 0,
      cancelled: 0,
    };

    orders.forEach((order) => {
      // status count
      statusCounts[order.status]++;

      // product count
      order.items.forEach((item) => {
        productCounts[item.product_name] =
          (productCounts[item.product_name] || 0) + item.quantity;
      });
    });

    return NextResponse.json({
      totalOrders: orders.length,

      totalRevenue: orders.reduce(
        (sum, o) => sum + o.total_amount,
        0
      ),

      pendingOrders: statusCounts.pending,
      confirmedOrders: statusCounts.confirmed,
      shippedOrders: statusCounts.shipped,
      deliveredOrders: statusCounts.delivered,
      cancelledOrders: statusCounts.cancelled,

      statusBreakdown: statusCounts,

      topProducts: Object.entries(productCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5),
    });
  } catch {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}
