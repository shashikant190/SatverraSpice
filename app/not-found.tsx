"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../src/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    console.error("404 Error: User attempted to access a non-existent route.");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <span className="text-8xl mb-4 block">🌿</span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-3">
          Oops! Page Not Found
        </h1>

        <p className="text-muted-foreground font-body text-lg mb-8">
          Looks like this page got lost in the spice garden! Let’s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="forest" className="w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
