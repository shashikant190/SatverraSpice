"use client";

import { useState } from "react";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../src/components/ui/card";
import { useToast } from "../../src/hooks/use-toast";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // ✅ CRITICAL
    if (loading) return;
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast({
        title: "Login Failed",
        description: data.message || "Invalid credentials",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    toast({
      title: "Welcome Admin 👋",
      description: "Redirecting to dashboard…",
    });

    // ✅ GUARANTEED redirect after cookie commit
    setTimeout(() => {
      window.location.href = "/admin-dashboard";
    }, 150);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-display">
            🌿 Spice Admin
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="admin@spicestory.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              <LogIn />
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
