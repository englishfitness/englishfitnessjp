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
        className={`${inter.className} min-h-screen`}
        style={{
          backgroundImage: "url('/brand/ribbons-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <SiteHeader />

        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
