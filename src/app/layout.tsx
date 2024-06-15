import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "../components/Footer";
import ReactQueryClientProvider from "../components/ReactQueryClientProvider";
import ShoppingCartProvider from "../components/ShoppingCartProvider";
import { ViewTransitions } from "next-view-transitions";

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
        <ViewTransitions>
          <html lang="en" className="bg-kape-black">
            <body
              className={`${montserrat.className} scroll-smooth bg-white transition-all`}
            >
              <Navbar />
              {children}
              <Footer />
            </body>
          </html>
        </ViewTransitions>
      </ReactQueryClientProvider>
    </ShoppingCartProvider>
  );
}
