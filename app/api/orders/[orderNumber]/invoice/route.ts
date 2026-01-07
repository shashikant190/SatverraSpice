import PDFDocument from "pdfkit/js/pdfkit.standalone.js";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { orderNumber: string } }
) {
  const order = await db.order.findFirst({
    where: { order_number: params.orderNumber },
    include: { customer: true, items: true },
  });

  if (!order) {
    return new Response("Order not found", { status: 404 });
  }

  const stream = new ReadableStream({
    start(controller) {
      const doc = new PDFDocument({ size: "A4", margin: 40 });

      doc.on("data", (c) => controller.enqueue(c));
      doc.on("end", () => controller.close());

      /* ================= HEADER ================= */
      doc.rect(0, 0, doc.page.width, 90).fill("#1f7a5f");

      doc
        .fillColor("white")
        .fontSize(26)
        .text("SatverraSpice", 40, 30);

      doc
        .fontSize(11)
        .text("Tax Invoice (Original for Recipient)", {
          align: "right",
        });

      doc.moveDown(3);
      doc.fillColor("#000");

      /* ================= SELLER ================= */
      doc.fontSize(11).text("Sold By:", 40);
      doc.text("Satverra Spice Co.");
      doc.text("Bengaluru, Karnataka, India");
      doc.text("PAN: AAAAA1234A");
      doc.text("GSTIN: 29AAAAA1234A1Z5");

      /* ================= CUSTOMER ================= */
      doc.text("Billing Address:", 330, 110);
      doc.text(order.customer.full_name, 330);
      doc.text(`Mobile: ${order.customer.mobile}`, 330);
      doc.text("State: Karnataka", 330);

      doc.moveDown(2);

      /* ================= META ================= */
      doc.text(`Order Number: ${order.order_number}`);
      doc.text(`Invoice Date: ${order.createdAt.toDateString()}`);

      doc.moveDown(1.5);

      /* ================= TABLE HEADER ================= */
      const tableY = doc.y;

      doc.rect(40, tableY, 520, 25).fill("#f4e1a1");
      doc.fillColor("#000").fontSize(10);

      doc.text("Sl", 45, tableY + 7);
      doc.text("Description", 70, tableY + 7);
      doc.text("Qty", 260, tableY + 7);
      doc.text("Price", 300, tableY + 7);
      doc.text("CGST", 360, tableY + 7);
      doc.text("SGST", 420, tableY + 7);
      doc.text("Total", 480, tableY + 7);

      let y = tableY + 35;
      let index = 1;
      let subtotal = 0;

      order.items.forEach((item) => {
        const base = item.price * item.quantity;
        const cgst = base * 0.025;
        const sgst = base * 0.025;
        const total = base + cgst + sgst;

        subtotal += total;

        doc.text(index++, 45, y);
        doc.text(item.product_name, 70, y);
        doc.text(item.quantity, 260, y);
        doc.text(`₹${item.price}`, 300, y);
        doc.text(`₹${cgst.toFixed(2)}`, 360, y);
        doc.text(`₹${sgst.toFixed(2)}`, 420, y);
        doc.text(`₹${total.toFixed(2)}`, 480, y);

        y += 22;
      });

      /* ================= TOTAL ================= */
      doc.moveTo(350, y + 5).lineTo(560, y + 5).stroke();

      doc.fontSize(12).text("Grand Total:", 360, y + 15);
      doc.fontSize(14).fillColor("#1f7a5f");
      doc.text(`₹${subtotal.toFixed(2)}`, 480, y + 15);

      doc.fillColor("#000");
      doc.moveDown(4);

      /* ================= FOOTER ================= */
      doc.fontSize(10).text(
        "This is a computer generated invoice.",
        { align: "center" }
      );

      doc.text(
        "Thank you for choosing Satverra Spice  🌶️",
        { align: "center" }
      );

      doc.end();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice-${order.order_number}.pdf`,
    },
  });
}
