import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import UtilityBar from "@/components/UtilityBar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markmacleanpainting.com"),
  title: {
    default: "Professional Painter in Merrimack Valley, MA | Mark MacLean Painting",
    template: "%s | Mark MacLean Painting",
  },
  description:
    "Professional painting services in the Merrimack Valley. Interior, exterior, cabinet painting & more. Serving Andover, Haverhill, Lowell, Methuen & surrounding towns.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mark MacLean Painting",
    images: [
      {
        url: "/gallery/exterior-painting/North-Andover-MA-1.png",
        width: 1200,
        height: 630,
        alt: "Mark MacLean Painting — Professional painters in the Merrimack Valley",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <UtilityBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
