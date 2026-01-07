import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import TrackOrderClient from "./TrackOrderClient";

export default async function TrackOrderPage({
  params,
}: {
  params: { orderNumber: string };
}) {
  const order = await db.order.findFirst({
    where: { order_number: params.orderNumber },
    include: {
      customer: true,
      items: true,
    },
  });

  if (!order) notFound();

  return <TrackOrderClient order={order} />;
}
