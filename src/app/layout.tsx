import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/_components/Navbar";
import Footer from "./_components/Footer";
import ReactQueryClientProvider from "./_components/ReactQueryClientProvider";
import ShoppingCartProvider from "./_components/ShoppingCartProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <ShoppingCartProvider>
      <ReactQueryClientProvider>
        <html lang="en" className="bg-kape-black">
          <body
            className={`${montserrat.className} scroll-smooth bg-white transition-all`}
          >
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ReactQueryClientProvider>
    </ShoppingCartProvider>
  );
}
