import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Kape",
  description: "Welcome to Kape: A Haven for Coffee Enthusiasts - Experience the finest blends and cozy ambiance in town. Indulge in artisanal brews and delightful treats. Your perfect spot for coffee, community, and conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
