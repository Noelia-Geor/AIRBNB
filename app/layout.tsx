import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb Clone - Encuentra tu Alojamiento Perfecto",
  description: "Plataforma de alojamiento - Clone de Airbnb con Next.js y Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-neutral-900 dark:bg-[#0a0a0a] dark:text-[#ededed]">
        {children}
        <Suspense fallback={null}>
          <Footer />
          <BottomNav />
        </Suspense>
      </body>
    </html>
  );
}
