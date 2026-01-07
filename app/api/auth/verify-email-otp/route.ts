import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json(
      { message: "Missing fields" },
      { status: 400 }
    );
  }

  const record = await db.emailOtp.findFirst({
    where: { email },
  });

  if (!record) {
    return NextResponse.json(
      { message: "OTP not found" },
      { status: 400 }
    );
  }

  if (record.expires_at < new Date()) {
    return NextResponse.json(
      { message: "OTP expired" },
      { status: 400 }
    );
  }

  const otpHash = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");

  if (otpHash !== record.otp_hash) {
    return NextResponse.json(
      { message: "Invalid OTP" },
      { status: 400 }
    );
  }

  await db.emailOtp.deleteMany({
    where: { email },
  });

  return NextResponse.json({ verified: true });
}
