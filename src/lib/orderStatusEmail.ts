import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendOrderStatusEmail({
  to,
  orderNumber,
  status,
}: {
  to: string;
  orderNumber: string;
  status: "cancelled" | "confirmed" | "shipped" | "delivered";
}) {
  const subjectMap = {
    cancelled: "Order cancelled ❌",
    confirmed: "Order confirmed ✅",
    shipped: "Order shipped 🚚",
    delivered: "Order delivered 🎉",
  };

  const messageMap = {
    cancelled: "Your order has been cancelled.",
    confirmed: "Your order has been confirmed.",
    shipped: "Your order is on the way.",
    delivered: "Your order has been delivered.",
  };

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: subjectMap[status],
    html: `
      <h2>Satverra Spice </h2>
      <p><strong>Order ID:</strong> ${orderNumber}</p>
      <p>${messageMap[status]}</p>

      <a href="${process.env.NEXT_PUBLIC_APP_URL}/track-order/${orderNumber}">
        Track your order
      </a>
    `,
  });
}
