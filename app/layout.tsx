import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "English Fitness", template: "%s | English Fitness" },
  description:
    "Personal training in Tokyo with relaxed English conversation coaching. Get Fit and Fluent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen ef-bg`}
        style={{
          // ✅ Fallback so the background NEVER disappears
          backgroundImage: "url('/brand/ribbons-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // ✅ Better on mobile (fixed can be janky)
          backgroundAttachment: "scroll",
        }}
      >
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}