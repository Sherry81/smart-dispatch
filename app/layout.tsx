import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Buildstone Smart Dispatch - Real-Time Job & Fleet Optimization",
  description:
    "Buildstone Smart Dispatch helps general contractors and home builders automate job assignment, optimize routes, and manage field operations in real time. Built for construction teams who need visibility across projects.",
  openGraph: {
    title: "Buildstone Smart Dispatch",
    description:
      "A powerful dispatch system for construction teams to automate job assignment, optimize routes, and track field operations in real time.",
    url: "https://smart-dispatch-chi.vercel.app/",
    siteName: "Buildstone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Buildstone Smart Dispatch Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildstone Smart Dispatch",
    description:
      "Automate dispatching, optimize routes, and manage construction operations in real time.",
    images: ["/og-image.png"],
  },
  keywords: [
    "construction ERP",
    "job costing",
    "fleet management",
    "dispatch software",
    "Buildstone",
    "Smart Dispatch",
  ],
  authors: [{ name: "Buildstone Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
