import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/email";

/* =========================
   ADMIN – GET ORDERS
   ========================= */
export async function GET() {
  try {
    const orders = await db.order.findMany({
      include: {
        customer: true,
        items: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(orders);
  } catch (err) {
    console.error("GET ORDERS ERROR:", err);
    return NextResponse.json([]);
  }
}

/* =========================
   PUBLIC – CREATE ORDER
   ========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      mobile,
      email,
      product,
      quantity,
      address,
      city,
      pincode,
      emailVerified,
    } = body;

    // ✅ NORMALIZE emailVerified (IMPORTANT FIX)
    const isEmailVerified =
      emailVerified === true || emailVerified === "true";

    // ❌ EMAIL OTP CHECK (FIRST)
    if (!isEmailVerified) {
      return NextResponse.json(
        { message: "Email not verified" },
        { status: 403 }
      );
    }

    // ❌ BASIC VALIDATION
    if (
      !fullName ||
      !mobile ||
      !email ||
      !product ||
      !quantity ||
      !address ||
      !city ||
      !pincode
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const priceMap: Record<string, number> = {
      turmeric: 149,
      chilli: 129,
    };

    const price = priceMap[product];
    if (!price) {
      return NextResponse.json(
        { message: "Invalid product" },
        { status: 400 }
      );
    }

    const totalAmount = price * quantity;

    // ✅ CREATE ORDER
    const order = await db.order.create({
      data: {
        order_number: `ORD-${Date.now()}`,
        total_amount: totalAmount,
        status: "pending",

        address,
        city,
        pincode,

        customer: {
          connectOrCreate: {
            where: { mobile },
            create: {
              full_name: fullName,
              mobile,
              email,
            },
          },
        },

        items: {
          create: [
            {
              product_name: product,
              quantity,
              price,
            },
          ],
        },
      },
    });

    // ✅ SEND CONFIRMATION EMAIL
    await sendOrderEmail({
      to: email,
      orderNumber: order.order_number,
      product,
      quantity,
      total: totalAmount,
    });

    return NextResponse.json(
      { orderNumber: order.order_number },
      { status: 201 }
    );
  } catch (err) {
    console.error("ORDER CREATE ERROR:", err);
    return NextResponse.json(
      { message: "Failed to place order" },
      { status: 500 }
    );
  }
}
