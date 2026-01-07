import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET() {
  try {
    requireAdmin();

    const customers = await db.customer.findMany({
      include: {
        orders: {
          orderBy: { createdAt: "desc" },
          include: {
            items: true,
          },
        },
      },
    });

    return NextResponse.json(
      customers.map((c) => ({
        id: c.id,
        full_name: c.full_name,
        mobile: c.mobile,
        email: c.email,
        order_count: c.orders.length,
        total_spent: c.orders.reduce(
          (sum, o) => sum + o.total_amount,
          0
        ),
        orders: c.orders.map((o) => ({
          id: o.id,
          order_number: o.order_number,
          createdAt: o.createdAt,
          status: o.status,
          total_amount: o.total_amount,
          items: o.items,
        })),
      }))
    );
  } catch {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}
