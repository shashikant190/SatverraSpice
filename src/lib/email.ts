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

/* ===============================
   ORDER CONFIRMATION (UNCHANGED)
   =============================== */
export async function sendOrderEmail({
  to,
  orderNumber,
  product,
  quantity,
  total,
}: {
  to: string;
  orderNumber: string;
  product: string;
  quantity: number;
  total: number;
}) {
  const trackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/track-order/${orderNumber}`;

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: "Your order is confirmed 🎉",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Order Confirmed 🎉</h2>

        <p><strong>Order ID:</strong> ${orderNumber}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total:</strong> ₹${total}</p>

        <a href="${trackUrl}" style="
          display:inline-block;
          margin-top:16px;
          padding:12px 20px;
          background:#1f7a5f;
          color:white;
          text-decoration:none;
          border-radius:6px;
        ">
          Track your order
        </a>

        <p style="margin-top:24px">
          Thank you for shopping with <strong>Satverra Spice 🌶️</strong>
        </p>
      </div>
    `,
  });
}

/* ===============================
   EMAIL OTP (OPTION A)
   =============================== */
export async function sendEmailOtp({
  to,
  otp,
}: {
  to: string;
  otp: string;
}) {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: "Verify your email – Satverra Spice ",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>Email Verification 🌶️</h2>

        <p>Your One-Time Password (OTP):</p>

        <h1 style="letter-spacing:4px">${otp}</h1>

        <p>This OTP is valid for <strong>5 minutes</strong>.</p>

        <p>If you did not request this, please ignore this email.</p>

        <p style="margin-top:24px">
          – Team <strong>Satverra Spice Co.</strong>
        </p>
      </div>
    `,
  });
}

/* ===============================
   ORDER STATUS UPDATE EMAIL
   =============================== */
export async function sendOrderStatusEmail({
  to,
  orderNumber,
  status,
}: {
  to: string;
  orderNumber: string;
  status:
    | "confirmed"
    | "shipped"
    | "delivered"
    | "cancelled";
}) {
  const trackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/track-order/${orderNumber}`;

  const statusText: Record<string, string> = {
    confirmed: "Your order has been confirmed ✅",
    shipped: "Your order has been shipped 🚚",
    delivered: "Your order has been delivered 🎉",
    cancelled: "Your order has been cancelled ❌",
  };

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject: `Order ${status.toUpperCase()} – ${orderNumber}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>${statusText[status]}</h2>

        <p><strong>Order ID:</strong> ${orderNumber}</p>
        <p><strong>Status:</strong> ${status}</p>

        <a href="${trackUrl}" style="
          display:inline-block;
          margin-top:16px;
          padding:12px 20px;
          background:#1f7a5f;
          color:white;
          text-decoration:none;
          border-radius:6px;
        ">
          Track your order
        </a>

        <p style="margin-top:24px">
          Thank you for choosing <strong>Satverra Spice Co. 🌶️</strong>
        </p>
      </div>
    `,
  });
}
