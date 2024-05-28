import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/Navbar";
import Footer from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryClientProvider from "./_components/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Kape",
  description:
    "Welcome to Kape: A Haven for Coffee Enthusiasts - Experience the finest blends and cozy ambiance in town. Indulge in artisanal brews and delightful treats. Your perfect spot for coffee, community, and conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${inter.className} bg-kape-black`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
