import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Satverra Spice  – Pure Indian Spices",
    template: "%s | Satverra Spice ",
  },
  description:
    "Shop 100% pure turmeric and chilli powder from India. No chemicals, no additives. Farm fresh spices delivered to your kitchen.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
