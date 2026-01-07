"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  const product = searchParams.get("product");
  const quantity = Number(searchParams.get("quantity") || 1);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);

  /* ================= OTP ================= */

  const sendOtp = async () => {
    if (!form.email) {
      toast({ title: "Enter email first", variant: "destructive" });
      return;
    }

    setSendingOtp(true);

    const res = await fetch("/api/auth/send-email-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });

    setSendingOtp(false);

    if (res.ok) {
      toast({ title: "OTP sent to email" });
      setOtpSent(true);
    } else {
      toast({
        title: "Failed to send OTP",
        variant: "destructive",
      });
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      toast({ title: "Enter OTP", variant: "destructive" });
      return;
    }

    setVerifyingOtp(true);

    const res = await fetch("/api/auth/verify-email-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, otp }),
    });

    setVerifyingOtp(false);

    if (res.ok) {
      toast({ title: "Email verified ✅" });
      setEmailVerified(true);
    } else {
      toast({
        title: "Invalid OTP",
        variant: "destructive",
      });
    }
  };

  /* ================= ORDER ================= */

  const handleSubmit = async () => {
    if (!emailVerified) {
      toast({
        title: "Verify email first",
        variant: "destructive",
      });
      return;
    }

    setPlacingOrder(true);

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        product,
        quantity,
        emailVerified: true,
      }),
    });

    setPlacingOrder(false);

    if (!res.ok) {
      const err = await res.json();
      toast({
        title: err.message || "Order failed",
        variant: "destructive",
      });
      return;
    }

    const data = await res.json();
    router.push(`/order-confirmation?orderNumber=${data.orderNumber}`);
  };

  /* ================= UI ================= */

  return (
    <div className="max-w-lg mx-auto py-10 space-y-4">
      <Input
        placeholder="Full Name"
        onChange={(e) =>
          setForm({ ...form, fullName: e.target.value })
        }
      />
      <Input
        placeholder="Mobile"
        onChange={(e) =>
          setForm({ ...form, mobile: e.target.value })
        }
      />
      <Input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      {!otpSent && (
        <Button
          onClick={sendOtp}
          loading={sendingOtp}
          disabled={sendingOtp}
        >
          Send OTP
        </Button>
      )}

      {otpSent && !emailVerified && (
        <>
          <Input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button
            onClick={verifyOtp}
            loading={verifyingOtp}
            disabled={verifyingOtp}
          >
            Verify OTP
          </Button>
        </>
      )}

      <Input
        placeholder="Address"
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
      />
      <Input
        placeholder="City"
        onChange={(e) =>
          setForm({ ...form, city: e.target.value })
        }
      />
      <Input
        placeholder="Pincode"
        onChange={(e) =>
          setForm({ ...form, pincode: e.target.value })
        }
      />

      <Button
        className="w-full"
        onClick={handleSubmit}
        loading={placingOrder}
        disabled={placingOrder}
      >
        Place Order
      </Button>
    </div>
  );
}
