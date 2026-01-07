import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { sendOrderStatusEmail } from "@/lib/orderStatusEmail";

export async function POST(
  req: Request,
  { params }: { params: { orderNumber: string } }
) {
  const order = await db.order.findFirst({
    where: { order_number: params.orderNumber },
    include: {
      customer: true, // ✅ REQUIRED
    },
  });

  if (!order) {
    return NextResponse.json(
      { message: "Order not found" },
      { status: 404 }
    );
  }

  if (!["pending", "confirmed"].includes(order.status)) {
    return NextResponse.json(
      { message: "Order cannot be cancelled now" },
      { status: 400 }
    );
  }

  await db.order.update({
    where: { id: order.id },
    data: { status: "cancelled" },
  });

  // ✅ SEND EMAIL
  if (order.customer.email) {
    await sendOrderStatusEmail({
      to: order.customer.email,
      orderNumber: order.order_number,
      status: "cancelled",
    });
  }

  return NextResponse.json({ success: true });
}
