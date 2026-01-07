import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/requireAdmin";

export async function PATCH(
  req: Request,
  { params }: { params: { orderNumber: string } }
) {
  try {
    requireAdmin();

    const { status } = await req.json();

    await db.order.update({
      where: {
        order_number: params.orderNumber,
      },
      data: {
        status,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("ORDER STATUS UPDATE ERROR:", err);
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
}
