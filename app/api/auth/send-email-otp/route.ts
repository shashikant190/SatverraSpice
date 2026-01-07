import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Email required" },
      { status: 400 }
    );
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpHash = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min

  // delete old OTPs
  await db.emailOtp.deleteMany({
    where: { email },
  });

  await db.emailOtp.create({
    data: {
      email,
      otp_hash: otpHash,
      expires_at: expiresAt,
    },
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: email,
    subject: "Your SatverraSpice OTP",
    html: `<h2>Your OTP: ${otp}</h2><p>Valid for 10 minutes</p>`,
  });

  return NextResponse.json({ success: true });
}
